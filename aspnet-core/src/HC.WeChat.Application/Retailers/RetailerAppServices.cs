using System.Collections.Generic;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.AutoMapper;
using Abp.Domain.Repositories;
using Abp.Linq.Extensions;
using System.Linq;

using System.Linq.Dynamic.Core;
using Microsoft.EntityFrameworkCore;
using HC.WeChat.Retailers.Authorization;
using HC.WeChat.Retailers.Dtos;
using HC.WeChat.Retailers.DomainServices;
using HC.WeChat.Retailers;
using System;
using HC.WeChat.Authorization;
using Microsoft.AspNetCore.Identity;
using Abp.IdentityFramework;
using HC.WeChat.Dto;
using Abp.Domain.Uow;
using HC.WeChat.Helpers;
using System.IO;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using Microsoft.AspNetCore.Hosting;

namespace HC.WeChat.Retailers
{
    /// <summary>
    /// Retailer应用层服务的接口实现方法
    /// </summary>
    //[AbpAuthorize(RetailerAppPermissions.Retailer)]
    [AbpAuthorize(AppPermissions.Pages)]
    public class RetailerAppService : WeChatAppServiceBase, IRetailerAppService
    {
        ////BCC/ BEGIN CUSTOM CODE SECTION
        ////ECC/ END CUSTOM CODE SECTION
        private readonly IRepository<Retailer, Guid> _retailerRepository;
        private readonly IRetailerManager _retailerManager;
        private readonly IHostingEnvironment _hostingEnvironment;

        /// <summary>
        /// 构造函数
        /// </summary>
        public RetailerAppService(IRepository<Retailer, Guid> retailerRepository
        , IRetailerManager retailerManager
        , IHostingEnvironment hostingEnvironment
        )
        {
            _retailerRepository = retailerRepository;
            _retailerManager = retailerManager;
            _hostingEnvironment = hostingEnvironment;
        }

        /// <summary>
        /// 获取Retailer的分页列表信息
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<PagedResultDto<RetailerListDto>> GetPagedRetailers(GetRetailersInput input)
        {
            var mid = UserManager.GetControlEmployeeId();
            var query = _retailerRepository.GetAll()
                .WhereIf(!string.IsNullOrEmpty(input.Name), r => r.Name.Contains(input.Name) || r.Code.Contains(input.Name))
                .WhereIf(input.Scale.HasValue, r => r.Scale == input.Scale)
                .WhereIf(input.Markets.HasValue, r => r.MarketType == input.Markets)
                .WhereIf(mid.HasValue, r => r.EmployeeId == mid);

            //TODO:根据传入的参数添加过滤条件
            var retailerCount = await query.CountAsync();

            var retailers = await query
                .OrderByDescending(r => r.CreationTime)
                .PageBy(input)
                .ToListAsync();

            //var retailerListDtos = ObjectMapper.Map<List <RetailerListDto>>(retailers);
            var retailerListDtos = retailers.MapTo<List<RetailerListDto>>();

            return new PagedResultDto<RetailerListDto>(
                retailerCount,
                retailerListDtos
                );

        }

        /// <summary>
        /// 通过指定id获取RetailerListDto信息
        /// </summary>
        [AbpAllowAnonymous]
        public async Task<RetailerListDto> GetRetailerByIdAsync(EntityDto<Guid> input)
        {
            var entity = await _retailerRepository.GetAsync(input.Id);

            return entity.MapTo<RetailerListDto>();
        }

        /// <summary>
        /// 导出Retailer为excel表
        /// </summary>
        /// <returns></returns>
        //public async Task<FileDto> GetRetailersToExcel(){
        //var users = await UserManager.Users.ToListAsync();
        //var userListDtos = ObjectMapper.Map<List<UserListDto>>(users);
        //await FillRoleNames(userListDtos);
        //return _userListExcelExporter.ExportToFile(userListDtos);
        //}
        /// <summary>
        /// MPA版本才会用到的方法
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<GetRetailerForEditOutput> GetRetailerForEdit(NullableIdDto<Guid> input)
        {
            var output = new GetRetailerForEditOutput();
            RetailerEditDto retailerEditDto;

            if (input.Id.HasValue)
            {
                var entity = await _retailerRepository.GetAsync(input.Id.Value);

                retailerEditDto = entity.MapTo<RetailerEditDto>();

                //retailerEditDto = ObjectMapper.Map<List <retailerEditDto>>(entity);
            }
            else
            {
                retailerEditDto = new RetailerEditDto();
            }

            output.Retailer = retailerEditDto;
            return output;

        }

        /// <summary>
        /// 添加或者修改Retailer的公共方法
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task CreateOrUpdateRetailer(CreateOrUpdateRetailerInput input)
        {

            if (input.Retailer.Id.HasValue)
            {
                await UpdateRetailerAsync(input.Retailer);
            }
            else
            {
                await CreateRetailerAsync(input.Retailer);
            }
        }

        /// <summary>
        /// 新增Retailer
        /// </summary>
        //[AbpAuthorize(RetailerAppPermissions.Retailer_CreateRetailer)]
        protected virtual async Task<RetailerEditDto> CreateRetailerAsync(RetailerEditDto input)
        {
            //TODO:新增前的逻辑判断，是否允许新增
            var entity = ObjectMapper.Map<Retailer>(input);
            entity.TenantId = AbpSession.TenantId;
            entity = await _retailerRepository.InsertAsync(entity);
            return entity.MapTo<RetailerEditDto>();
        }

        /// <summary>
        /// 编辑Retailer
        /// </summary>
        //[AbpAuthorize(RetailerAppPermissions.Retailer_EditRetailer)]
        protected virtual async Task UpdateRetailerAsync(RetailerEditDto input)
        {
            //TODO:更新前的逻辑判断，是否允许更新
            var entity = await _retailerRepository.GetAsync(input.Id.Value);
            input.MapTo(entity);

            // ObjectMapper.Map(input, entity);
            await _retailerRepository.UpdateAsync(entity);
        }

        /// <summary>
        /// 删除Retailer信息的方法
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        //[AbpAuthorize(RetailerAppPermissions.Retailer_DeleteRetailer)]
        public async Task DeleteRetailer(EntityDto<Guid> input)
        {

            //TODO:删除前的逻辑判断，是否允许删除
            await _retailerRepository.DeleteAsync(input.Id);
        }

        /// <summary>
        /// 批量删除Retailer的方法
        /// </summary>
        //[AbpAuthorize(RetailerAppPermissions.Retailer_BatchDeleteRetailers)]
        public async Task BatchDeleteRetailersAsync(List<Guid> input)
        {
            //TODO:批量删除前的逻辑判断，是否允许删除
            await _retailerRepository.DeleteAsync(s => input.Contains(s.Id));
        }

        /// <summary>
        /// 添加或者修改Retailer的方法
        /// </summary>
        /// <param name="input">零售客户实体</param>
        /// <returns></returns>
        public async Task CreateOrUpdateRetailerDto(RetailerEditDto input)
        {
            if (input.Id.HasValue)
            {
                await UpdateRetailerAsync(input);
            }
            else
            {
                await CreateRetailerAsync(input);
            }
        }

        /// <summary>
        /// 通过id查询单个零售户信息
        /// </summary>
        /// <param name="input">零售户id</param>
        /// <returns></returns>
        public async Task<RetailerListDto> GetRetailerByIdDtoAsync(EntityDto<Guid> input)
        {
            var entity = await _retailerRepository.GetAll().Where(r => r.Id == input.Id).FirstOrDefaultAsync();
            return entity.MapTo<RetailerListDto>();
        }

        /// <summary>
        /// 检查零售户编码是否可用
        /// </summary>
        /// <returns></returns>
        public bool CheckName(string code, Guid? id)
        {
            var count = _retailerRepository.GetAll().Where(r => r.Code == code).Count();
            var entity = _retailerRepository.GetAll().Where(e => e.Id == id).FirstOrDefault();
            if (entity != null)
            {
                if (entity.Code == code)
                {
                    return true;
                }
                else if (count > 0)
                {
                    return false;
                }
                else
                {
                    return true;
                }
            }
            else
            {
                return count <= 0;
            }
        }

        #region 导出档级模板

        private async Task<List<RetailerLevelDto>> GetRetailerLevelListAsync(GetRetailersInput input)
        {
            var mid = UserManager.GetControlEmployeeId();
            var query = _retailerRepository.GetAll()
                  .Where(r => r.IsAction == true)
                  .WhereIf(!string.IsNullOrEmpty(input.Name), r => r.Name.Contains(input.Name) || r.Code.Contains(input.Name))
                  .WhereIf(input.Scale.HasValue, r => r.Scale == input.Scale)
                  .WhereIf(input.Markets.HasValue, r => r.MarketType == input.Markets)
                  .WhereIf(mid.HasValue, r => r.EmployeeId == mid)
                  .Select(r => new RetailerLevelDto()
                  {
                      Code = r.Code,
                      Name = r.Name,
                      ArchivalLevel = r.ArchivalLevel,
                      BusinessAddress = r.BusinessAddress,
                      LicenseKey = r.LicenseKey,
                      Manager = r.Manager
                  });
            return await query.ToListAsync();
        }

        private string SaveRetailerLevelExcel(string fileName, List<RetailerLevelDto> data)
        {
            var fullPath = ExcelHelper.GetSavePath(_hostingEnvironment.WebRootPath) + fileName;
            using (var fs = new FileStream(fullPath, FileMode.Create, FileAccess.Write))
            {
                IWorkbook workbook = new XSSFWorkbook();
                ISheet sheet = workbook.CreateSheet("邮寄信息");
                var rowIndex = 0;
                IRow titleRow = sheet.CreateRow(rowIndex);
                string[] titles = { "序号", "客户编码", "姓名", "专卖证号", "客户经理", "档级" };
                var fontTitle = workbook.CreateFont();
                fontTitle.IsBold = true;
                for (int i = 0; i < titles.Length; i++)
                {
                    var cell = titleRow.CreateCell(i);
                    cell.CellStyle.SetFont(fontTitle);
                    cell.SetCellValue(titles[i]);
                }

                var font = workbook.CreateFont();
                foreach (var item in data)
                {
                    rowIndex++;
                    IRow row = sheet.CreateRow(rowIndex);
                    ExcelHelper.SetCell(row.CreateCell(0), font, rowIndex);
                    ExcelHelper.SetCell(row.CreateCell(1), font, item.Code);
                    ExcelHelper.SetCell(row.CreateCell(2), font, item.Name);
                    //ExcelHelper.SetCell(row.CreateCell(3), font, item.BusinessAddress);
                    ExcelHelper.SetCell(row.CreateCell(3), font, item.LicenseKey);
                    ExcelHelper.SetCell(row.CreateCell(4), font, item.Manager);
                    ExcelHelper.SetCell(row.CreateCell(5), font, item.ArchivalLevel);
                }

                workbook.Write(fs);
            }
            return "/files/downloadtemp/" + fileName;
        }

        #endregion

        [UnitOfWork(isTransactional: false)]
        public async Task<APIResultDto> ExportRetailerLevelExcel(GetRetailersInput input)
        {
            try
            {
                var exportData = await GetRetailerLevelListAsync(input);
                var result = new APIResultDto();
                result.Code = 0;
                result.Data = SaveRetailerLevelExcel("零售客户档级.xlsx", exportData);
                return result;
            }
            catch (Exception ex)
            {
                Logger.ErrorFormat("ExportPostInfoExcel errormsg:{0} Exception:{1}", ex.Message, ex);
                return new APIResultDto() { Code = 901, Msg = "网络忙... 请待会重试！" };
            }
        }
    }
}


﻿using System.Collections.Generic;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.AutoMapper;
using Abp.Domain.Repositories;
using Abp.Linq.Extensions;

using System.Linq.Dynamic.Core;
using Microsoft.EntityFrameworkCore;
using HC.WeChat.Employees.Authorization;
using HC.WeChat.Employees.Dtos;
using HC.WeChat.Employees.DomainServices;
using HC.WeChat.Employees;
using System;

namespace HC.WeChat.Employees
{
    /// <summary>
    /// Employee应用层服务的接口实现方法
    /// </summary>
    [AbpAuthorize(EmployeeAppPermissions.Employee)]
    public class EmployeeAppService : WeChatAppServiceBase, IEmployeeAppService
    {
        ////BCC/ BEGIN CUSTOM CODE SECTION
        ////ECC/ END CUSTOM CODE SECTION
        private readonly IRepository<Employee, Guid> _employeeRepository;
        private readonly IEmployeeManager _employeeManager;

        /// <summary>
        /// 构造函数
        /// </summary>
        public EmployeeAppService(IRepository<Employee, Guid> employeeRepository
      , IEmployeeManager employeeManager
        )
        {
            _employeeRepository = employeeRepository;
            _employeeManager = employeeManager;
        }

        /// <summary>
        /// 获取Employee的分页列表信息
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task<PagedResultDto<EmployeeListDto>> GetPagedEmployees(GetEmployeesInput input)
        {

            var query = _employeeRepository.GetAll();
            //TODO:根据传入的参数添加过滤条件
            var employeeCount = await query.CountAsync();

            var employees = await query
                .OrderBy(input.Sorting)
                .PageBy(input)
                .ToListAsync();

            //var employeeListDtos = ObjectMapper.Map<List <EmployeeListDto>>(employees);
            var employeeListDtos = employees.MapTo<List<EmployeeListDto>>();

            return new PagedResultDto<EmployeeListDto>(
                employeeCount,
                employeeListDtos
                );

        }

        /// <summary>
        /// 通过指定id获取EmployeeListDto信息
        /// </summary>
        public async Task<EmployeeListDto> GetEmployeeByIdAsync(EntityDto<Guid> input)
        {
            var entity = await _employeeRepository.GetAsync(input.Id);

            return entity.MapTo<EmployeeListDto>();
        }

        /// <summary>
        /// 导出Employee为excel表
        /// </summary>
        /// <returns></returns>
        //public async Task<FileDto> GetEmployeesToExcel(){
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
        public async Task<GetEmployeeForEditOutput> GetEmployeeForEdit(NullableIdDto<Guid> input)
        {
            var output = new GetEmployeeForEditOutput();
            EmployeeEditDto employeeEditDto;

            if (input.Id.HasValue)
            {
                var entity = await _employeeRepository.GetAsync(input.Id.Value);

                employeeEditDto = entity.MapTo<EmployeeEditDto>();

                //employeeEditDto = ObjectMapper.Map<List <employeeEditDto>>(entity);
            }
            else
            {
                employeeEditDto = new EmployeeEditDto();
            }

            output.Employee = employeeEditDto;
            return output;

        }

        /// <summary>
        /// 添加或者修改Employee的公共方法
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public async Task CreateOrUpdateEmployee(CreateOrUpdateEmployeeInput input)
        {

            if (input.Employee.Id.HasValue)
            {
                await UpdateEmployeeAsync(input.Employee);
            }
            else
            {
                await CreateEmployeeAsync(input.Employee);
            }
        }

        /// <summary>
        /// 新增Employee
        /// </summary>
        [AbpAuthorize(EmployeeAppPermissions.Employee_CreateEmployee)]
        protected virtual async Task<EmployeeEditDto> CreateEmployeeAsync(EmployeeEditDto input)
        {
            //TODO:新增前的逻辑判断，是否允许新增
            var entity = ObjectMapper.Map<Employee>(input);

            entity = await _employeeRepository.InsertAsync(entity);
            return entity.MapTo<EmployeeEditDto>();
        }

        /// <summary>
        /// 编辑Employee
        /// </summary>
        [AbpAuthorize(EmployeeAppPermissions.Employee_EditEmployee)]
        protected virtual async Task UpdateEmployeeAsync(EmployeeEditDto input)
        {
            //TODO:更新前的逻辑判断，是否允许更新
            var entity = await _employeeRepository.GetAsync(input.Id.Value);
            input.MapTo(entity);

            // ObjectMapper.Map(input, entity);
            await _employeeRepository.UpdateAsync(entity);
        }

        /// <summary>
        /// 删除Employee信息的方法
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        [AbpAuthorize(EmployeeAppPermissions.Employee_DeleteEmployee)]
        public async Task DeleteEmployee(EntityDto<Guid> input)
        {

            //TODO:删除前的逻辑判断，是否允许删除
            await _employeeRepository.DeleteAsync(input.Id);
        }

        /// <summary>
        /// 批量删除Employee的方法
        /// </summary>
        [AbpAuthorize(EmployeeAppPermissions.Employee_BatchDeleteEmployees)]
        public async Task BatchDeleteEmployeesAsync(List<Guid> input)
        {
            //TODO:批量删除前的逻辑判断，是否允许删除
            await _employeeRepository.DeleteAsync(s => input.Contains(s.Id));
        }

    }
}


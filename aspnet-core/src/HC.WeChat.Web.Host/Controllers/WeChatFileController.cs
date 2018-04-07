using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using HC.WeChat.Configuration;
using HC.WeChat.Controllers;
using HC.WeChat.Dto;
using HC.WeChat.Models.WeChat;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace HC.WeChat.Web.Host.Controllers
{
    public class WeChatFileController : WeChatControllerBase
    {
        private readonly IHostingEnvironment _hostingEnvironment;

        public WeChatFileController(IHostingEnvironment hostingEnvironment)
        {
            this._hostingEnvironment = hostingEnvironment;
        }

        public IActionResult Index()
        {
            return View();
        }

        [RequestFormSizeLimit(valueCountLimit: 2147483647)]
        [HttpPost]
        public async Task<IActionResult> BanquetPhotoSave(IFormFile imgs)
        {
            var date = Request;
            var files = Request.Form.Files;
            long size = files.Sum(f => f.Length);
            string webRootPath = _hostingEnvironment.WebRootPath;
            string contentRootPath = _hostingEnvironment.ContentRootPath;
            WeChatFile result = new WeChatFile();
            foreach (var formFile in files)
            {
                if (formFile.Length > 0)
                {

                    string fileExt = Path.GetExtension(formFile.FileName); //文件扩展名，不含“.”
                    long fileSize = formFile.Length; //获得文件大小，以字节为单位
                    result.Uid = Guid.NewGuid().ToString();
                    string newFileName = result.Uid + "." + fileExt; //随机生成新的文件名
                    var fileDire = webRootPath + "/upload/BanquetPhotos/";
                    if (!Directory.Exists(fileDire))
                    {
                        Directory.CreateDirectory(fileDire);
                    }

                    var filePath = fileDire + newFileName;

                    result.Url = filePath;
                    result.Name = newFileName;

                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await formFile.CopyToAsync(stream);
                    }
                }
            }

            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> BanquetPhotoSaveBase64([FromBody]JObject data)
        {
            WeChatFileInput file = data.ToObject<WeChatFileInput>();
            var imageBase64 = file.thumbUrl;
            
            if (!string.IsNullOrWhiteSpace(imageBase64))
            {
                var reg = new Regex("data:image/(.*);base64,");
                imageBase64 = reg.Replace(imageBase64, "");
                byte[] imageByte = Convert.FromBase64String(imageBase64);
                var memorystream = new MemoryStream(imageByte);

                WeChatFile result = new WeChatFile();
                string webRootPath = _hostingEnvironment.WebRootPath;
                string contentRootPath = _hostingEnvironment.ContentRootPath;
                string fileExt = Path.GetExtension(file.name); //文件扩展名，不含“.”
                string newFileName = file.uid + "." + fileExt; //随机生成新的文件名
                var fileDire = webRootPath + "/upload/BanquetPhotos/";
                if (!Directory.Exists(fileDire))
                {
                    Directory.CreateDirectory(fileDire);
                }

                var filePath = fileDire + newFileName;

                result.Url = filePath;
                result.Name = newFileName;

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await memorystream.CopyToAsync(stream);
                }

                return Json(new APIResultDto() { Code = 701, Msg = "上传数据成功", Data = result });
            }
            return Json(new APIResultDto() { Code = 701, Msg = "上传数据不能为空" });
        }


    }
}
using System;
using System.Collections.Generic;
using System.IO;
using System.DrawingCore;
using System.DrawingCore.Imaging;
using System.Text;
using System.Threading.Tasks;

namespace Abp.WeChat.Picture
{
    public class PictureExifHelper
    {
        public static int ExposureTimeId = 0x9003;//拍摄日期
        public static int LastModificationTimeId = 0x0132; //最后更新时间

        public PictureExifHelper()
        {

        }

        public async static Task<string> GetTakePicDate(string fileName, bool isTime = true)
        {
            if (string.IsNullOrEmpty(fileName))
            {
                return await Task.FromResult(string.Empty);
            }
            Encoding ascii = Encoding.ASCII;
            string picDate = string.Empty;
            try
            {
                FileStream stream = new FileStream(fileName, FileMode.Open, FileAccess.Read);
                Image image = Image.FromStream(stream, true, false);

                foreach (PropertyItem p in image.PropertyItems)
                {
                    //获取拍摄日期时间
                    if (p.Id == ExposureTimeId)
                    {
                        stream.Close();

                        picDate = ascii.GetString(p.Value);
                        if ((!"".Equals(picDate)) && picDate.Length >= 10)
                        {
                            // 拍摄日期
                            if (!isTime)
                            {
                                picDate = picDate.Substring(0, 10).Replace(":", "-");
                            }
                            else
                            {
                                picDate = picDate.Substring(0, 10).Replace(":", "-") + picDate.Substring(10, 9);
                            }
                        }
                        break;
                    }
                }
                stream.Close();
                return await Task.FromResult(picDate);
            }
            catch(Exception)
            {
                return await Task.FromResult(string.Empty);
            }
        }
    }
}

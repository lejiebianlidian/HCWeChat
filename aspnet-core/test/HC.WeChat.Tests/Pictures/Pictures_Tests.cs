using Abp.WeChat.Picture;
using HC.WeChat.Pictures;
using System;
using System.Collections.Generic;
using System.DrawingCore;
using System.DrawingCore.Imaging;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace HC.WeChat.Tests.Pictures
{
    public class Pictures_Tests : WeChatTestBase
    {

        [Fact]
        public void GetPictureExif_Test()
        {
            PictureExif em = new PictureExif();

            string filePath = @"H:\photo\IMG_20180517_065915.jpg";//Server.MapPath("Test.jpg");//这里可以动态传递图片路径的 

            PictureExif.Metadata m = em.GetEXIFMetaData(filePath);//这里就是调用，传图片绝对路径 

            string exif = m.Ver.DisplayValue;

            string camera = m.CameraModel.DisplayValue;

            string model = m.CameraModel.DisplayValue;

            string aperture = m.Aperture.DisplayValue;

            string shutter = m.ShutterSpeed.DisplayValue;

            string sensitive = m.ExposureIndex.DisplayValue;
            Encoding ascii = Encoding.ASCII;
            string e = ascii.GetString(m.ExposureTime.ByteValue);
            string exposureTime = m.ExposureTime.DisplayValue;
        }

        [Fact]
        public void GetPictureExif_Test2()
        {
            string filePath = "aaa";// @"H:\photo\IMG_20180517_065915.jpg";
            string str = PictureExifHelper.GetTakePicDate(filePath).Result;
            string str2 = PictureExifHelper.GetTakePicDate(filePath, false).Result;
            //string str = GetTakePicDate(filePath);
        }

        private string GetTakePicDate(string fileName)
        {
            Encoding ascii = Encoding.ASCII;
            string picDate;

            FileStream stream = new FileStream(fileName, FileMode.Open, FileAccess.Read);
            Image image = Image.FromStream(stream, true, false);

            foreach (PropertyItem p in image.PropertyItems)
            {
                //获取拍摄日期时间
                if (p.Id == 0x9003) // 0x0132 最后更新时间
                {
                    stream.Close();

                    picDate = ascii.GetString(p.Value);
                    if ((!"".Equals(picDate)) && picDate.Length >= 10)
                    {
                        // 拍摄日期
                        picDate = picDate.Substring(0, 10);
                        picDate = picDate.Replace(":", "-");
                        return picDate;
                    }
                }
            }
            stream.Close();
            return "";
        }
    }
}

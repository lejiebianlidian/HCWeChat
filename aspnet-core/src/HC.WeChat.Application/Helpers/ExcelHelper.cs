using NPOI.SS.UserModel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace HC.WeChat.Helpers
{
    public class ExcelHelper
    {
        public static string GetSavePath(string host)
        {
            var fileDire = host + @"\files\downloadtemp\";
            if (!Directory.Exists(fileDire))
            {
                Directory.CreateDirectory(fileDire);
            }
            return fileDire;
        }


        public static void SetCell(ICell cell, IFont font, string value)
        {
            cell.CellStyle.SetFont(font);
            cell.SetCellValue(value);
        }

        public static void SetCell(ICell cell, IFont font, int value)
        {
            cell.CellStyle.SetFont(font);
            cell.SetCellValue(value);
        }

        public static void SetCell(ICell cell, IFont font, DateTime value)
        {
            cell.CellStyle.SetFont(font);
            cell.SetCellValue(value);
        }

    }
}

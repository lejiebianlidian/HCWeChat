using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;
using System.Text;

namespace HC.WeChat.Migrations
{
   public partial class Add_ActivityForm_IsDelete: Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
               name: "IsDeleted",
               table: "ActivityForms",
               defaultValue:false,
               nullable: false);

            migrationBuilder.AddColumn<DateTime?>(
             name: "DeletionTime",
             table: "ActivityForms",
             nullable: true);

            migrationBuilder.AddColumn<long?>(
            name: "DeleterUserId",
            table: "ActivityForms",
            nullable: true);

            migrationBuilder.AddColumn<DateTime?>(
            name: "LastModificationTime",
            table: "ActivityForms",
            nullable: true);

            migrationBuilder.AddColumn<long?>(
            name: "LastModifierUserId",
            table: "ActivityForms",
            nullable: true);

            migrationBuilder.AddColumn<long?>(
            name: "CreatorUserId",
            table: "ActivityForms",
            nullable: true);

        }
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
               name: "IsDeleted",
               table: "ActivityForms");

            migrationBuilder.DropColumn(
               name: "DeletionTime",
               table: "ActivityForms");

            migrationBuilder.DropColumn(
              name: "DeleterUserId",
              table: "ActivityForms");

            migrationBuilder.DropColumn(
              name: "LastModificationTime",
              table: "ActivityForms");

            migrationBuilder.DropColumn(
            name: "LastModifierUserId",
            table: "ActivityForms");

            migrationBuilder.DropColumn(
            name: "CreatorUserId",
            table: "ActivityForms");

        }
    }
}

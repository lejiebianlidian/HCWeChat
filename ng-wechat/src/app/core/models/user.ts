export class User {
    Id: string;
    Name: string;
    Password: string;
    UserType: UserTypeEnum;
    UserTypeName: string;
    Photo: string;
}

export enum UserTypeEnum {
    Retailer = 1,
    Manager = 2,
    Consumer = 3
}
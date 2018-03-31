export class ActivityDeliveryInfoDto implements IActivityDeliveryInfoDto {
    id: string;
    activityFormId: string;
    userName: string;
    phone: string;
    address: string;
    constructor(data?: IActivityDeliveryInfoDto) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.activityFormId = data["activityFormId"];
            this.userName = data["userName"];
            this.phone = data["phone"];
            this.address = data["address"];
        }
    }

    static fromJS(data: any): ActivityDeliveryInfoDto {
        let result = new ActivityDeliveryInfoDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["activityFormId"] = this.activityFormId;
        data["userName"] = this.userName;
        data["phone"] = this.phone;
        data["address"] = this.address;
        return data;
    }

    clone() {
        const json = this.toJSON();
        let result = new ActivityDeliveryInfoDto();
        result.init(json);
        return result;
    }
}
export interface IActivityDeliveryInfoDto {
    id: string;
    activityFormId: string;
    userName: string;
    phone: string;
    address: string;
}
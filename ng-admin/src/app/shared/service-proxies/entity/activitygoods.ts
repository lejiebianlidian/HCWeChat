export class ActivityGoods implements IActivityGoods {
    id: string;
    specification: string;
    activityId: string;
    minNum: number;
    maxNum: number;
    discountDesc: string;
    isDeleted: boolean;
    creationTime: Date;
    creatorUserId: number;
    lastModificationTime: Date;
    lastModifierUserId: number;
    deletionTime: Date;
    deleterUserId: number;

    constructor(data?: IActivityGoods) {
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
            this.specification = data["specification"];
            this.activityId = data["activityId"];
            this.minNum = data["minNum"];
            this.maxNum = data["maxNum"];
            this.discountDesc = data["discountDesc"];
            this.isDeleted = data["isDeleted"];
            this.creationTime = data["creationTime"];
            this.creatorUserId = data["creatorUserId"];

        }
    }

    static fromJS(data: any): ActivityGoods {
        let result = new ActivityGoods();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["specification"] = this.specification;
        data["activityId"] = this.activityId;
        data["minNum"] = this.minNum;
        data["maxNum"] = this.maxNum;
        data["discountDesc"] = this.discountDesc;
        data["isDeleted"] = this.isDeleted;
        data["creationTime"] = this.creationTime;
        data["creatorUserId"] = this.creatorUserId;
        data["lastModificationTime"] = this.lastModificationTime;
        data["lastModifierUserId"] = this.lastModifierUserId;
        data["deletionTime"] = this.deletionTime;
        data["deleterUserId"] = this.deleterUserId;
        return data;
    }

    clone() {
        const json = this.toJSON();
        let result = new ActivityGoods();
        result.init(json);
        return result;
    }
}
export interface IActivityGoods {
    id: string;
    specification: string;
    activityId: string;
    minNum: number;
    maxNum: number;
    discountDesc: string;
    isDeleted: boolean;
    creationTime: Date;
    creatorUserId: number;
    lastModificationTime: Date;
    lastModifierUserId: number;
    deletionTime: Date;
    deleterUserId: number;
}

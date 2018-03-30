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
        this.id = data["id"];
        this.specification = data["specification"];
        this.activityId = data["activityId"];
        this.minNum = data["minNum"];
        this.maxNum = data["maxNum"];
        this.discountDesc = data["discountDesc"];
        this.isDeleted = data["isDeleted"];
        this.creationTime = data["creationTime"];
        this.creatorUserId = data["creatorUserId"];
        this.lastModificationTime = data["lastModificationTime"];
        this.lastModifierUserId = data["lastModifierUserId"];
        this.deletionTime = data["deletionTime"];
        this.deleterUserId = data["deleterUserId"];
        return data;
    }

    clone() {
        const json = this.toJSON();
        let result = new ActivityGoods();
        result.init(json);
        return result;
    }
}
export class IActivityGoods {
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

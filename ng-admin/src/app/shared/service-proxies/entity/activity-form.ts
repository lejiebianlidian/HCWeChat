export class ActivityForm implements IActivityForm {
    id: string;
    formCode: string;
    activityId: string;
    retailerId: string;
    activityGoodsId: string;
    goodsSpecification: string;
    num: number;
    reason: string;
    status: number;
    creationTime: Date;
    constructor(data?: IActivityForm) {
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
            this.formCode = data["formCode"];
            this.activityId = data["activityId"];
            this.retailerId = data["retailerId"];
            this.activityGoodsId = data["activityGoodsId"];
            this.goodsSpecification = data["goodsSpecification"];
            this.num = data["num"];
            this.reason = data["reason"];
            this.status = data["status"];
            this.creationTime = data["creationTime"];
        }
    }

    static fromJS(data: any): ActivityForm {
        let result = new ActivityForm();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        this.id = data["id"];
        this.formCode = data["formCode"];
        this.activityId = data["activityId"];
        this.retailerId = data["retailerId"];
        this.activityGoodsId = data["activityGoodsId"];
        this.goodsSpecification = data["goodsSpecification"];
        this.num = data["num"];
        this.reason = data["reason"];
        this.status = data["status"];
        this.creationTime = data["creationTime"];
        return data;
    }

    clone() {
        const json = this.toJSON();
        let result = new ActivityForm();
        result.init(json);
        return result;
    }
}
export class IActivityForm {
    id: string;
    formCode: string;
    activityId: string;
    retailerId: string;
    activityGoodsId: string;
    goodsSpecification: string;
    num: number;
    reason: string;
    status: number;
    creationTime: Date;
}

export class ActivityFormDto implements IActivityFormDto {
    id: string;
    formCode: string;
    activityId: string;
    retailerId: string;
    activityGoodsId: string;
    goodsSpecification: string;
    num: number;
    reason: string;
    status: number;
    creationTime: Date;

    constructor(data?: IActivityFormDto) {
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
            this.formCode = data["formCode"];
            this.activityId = data["activityId"];
            this.retailerId = data["retailerId"];
            this.activityGoodsId = data["activityGoodsId"];
            this.goodsSpecification = data["goodsSpecification"];
            this.num = data["num"];
            this.reason = data["reason"];
            this.status = data["status"];
            this.creationTime = data["creationTime"];
        }
    }

    static fromJS(data: any): ActivityFormDto {
        let result = new ActivityFormDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        this.id = data["id"];
        this.formCode = data["formCode"];
        this.activityId = data["activityId"];
        this.retailerId = data["retailerId"];
        this.activityGoodsId = data["activityGoodsId"];
        this.goodsSpecification = data["goodsSpecification"];
        this.num = data["num"];
        this.reason = data["reason"];
        this.status = data["status"];
        this.creationTime = data["creationTime"];

        return data;
    }

    clone() {
        const json = this.toJSON();
        let result = new ActivityFormDto();
        result.init(json);
        return result;
    }
}

export interface IActivityFormDto {
    id: string;
    formCode: string;
    activityId: string;
    retailerId: string;
    activityGoodsId: string;
    goodsSpecification: string;
    num: number;
    reason: string;
    status: number;
    creationTime: Date;
}
export class ActivityBanquetDto implements IActivityBanquetDto {
    id: string;
    activityFormId: string;
    area: string;
    responsible: string;
    executor: string;
    banquetTime: string;
    position: string;
    num: number;
    desc: string;
    photoUrl: string;
    creationTime: Date;
    userName: string;
    constructor(data?: IActivityBanquetDto) {
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
            this.area = data["area"];
            this.responsible = data["responsible"];
            this.executor = data["executor"];
            this.banquetTime = data["banquetTime"];
            this.position = data["position"];
            this.num = data["num"];
            this.desc = data["desc"];
            this.photoUrl = data["photoUrl"];
            this.creationTime = data["creationTime"];
            this.userName = data["userName"];
        }
    }

    static fromJS(data: any): ActivityBanquetDto {
        let result = new ActivityBanquetDto();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["activityFormId"] = this.activityFormId;
        data["area"] = this.area;
        data["responsible"] = this.responsible;
        data["executor"] = this.executor;
        data["banquetTime"] = this.banquetTime;
        data["position"] = this.position;
        data["num"] = this.num;
        data["desc"] = this.desc;
        data["photoUrl"] = this.photoUrl;
        data["creationTime"] = this.creationTime;
        data["userName"] = this.userName;
        return data;
    }

    clone() {
        const json = this.toJSON();
        let result = new ActivityBanquetDto();
        result.init(json);
        return result;
    }

    getPhotoUrls(): Photo[]{
        if (!this.photoUrl) {
            return null;
        }
        let strArry = this.photoUrl.split(',');
        if(strArry.length > 0){
            let pArry = [];
            strArry.forEach((item) => {
                let iarry = item.split(';');
                if(iarry.length == 1){
                    let p = new Photo();
                    p.url = iarry[0];
                    pArry.push(p);
                } else if(iarry.length == 2) {
                    let p = new Photo();
                    p.url = iarry[0];
                    p.exposureTime = iarry[1];
                    pArry.push(p);
                }
            });
            return pArry;
        }
        return null;
    }
}
export interface IActivityBanquetDto {
    id: string;
    activityFormId: string;
    area: string;
    responsible: string;
    executor: string;
    banquetTime: string;
    position: string;
    num: number;
    desc: string;
    photoUrl: string;
    creationTime: Date;
    userName: string;
}

export class  Photo {
    url: string;
    exposureTime: string;
}
export class AuthSetting {
    creationTime: Date;
    lastModificationTime: Date;
    name: string;
    appOrgId: string;
    appType: number;
    appId: string;
    appSecret: string;
    encodingAESKey:string;
    qrCodeUrl: string;
    token: string;
    accessToken: string;
    expiresIn: number;
    nextGettime: Date;
    creatorUserId: number;
    lastModifierUserId: number;

    constructor(data?: IAuthSetting) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.appOrgId = data["appOrgId"];
            this.appType = data["appType"];
            this.appId = data["appId"];
            this.appSecret = data["appSecret"];
            this.qrCodeUrl = data["qrCodeUrl"];
            this.token = data["token"];
            this.expiresIn = data["expiresIn"];
            this.accessToken = data["accessToken"];
            this.nextGettime = data["nextGettime"];
        }
    }

    static fromJS(data: any): AuthSetting {
        let result = new AuthSetting();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["appOrgId"] = this.appOrgId;
        return data;
    }

    clone() {
        const json = this.toJSON();
        let result = new AuthSetting();
        result.init(json);
        return result;
    }
}
export class IAuthSetting {
    creationTime: Date;
    lastModificationTime: Date;
    name: string;
    appOrgId: string;
    appType: number;
    appId: string;
    appSecret: string;
    encodingAESKey:string;
    qrCodeUrl: string;
    token: string;
    accessToken: string;
    expiresIn: number;
    nextGettime: Date;
    creatorUserId: number;
    lastModifierUserId: number;
    
}
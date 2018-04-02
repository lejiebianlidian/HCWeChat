import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from './httpclient';
import { ApiResult, Employee, Retailer } from '../../model';
import { Subject } from 'rxjs/Subject';
import { Storage } from '@ionic/storage';

@Injectable()
export class UserService {

    /**
     * 根据房屋deptId获取预存收费项目
     * @param houseDeptId 房屋的DeptId
     */
    /*getSubjectListByHouseDeptId(houseDeptId: any): Observable<any> {
        return this.http.get('PropertyClient/GetSubjectListByHouseDeptId', {
            HouseDeptId: houseDeptId
        }).map(r => {
            let result = r.json() as ApiResult<any>;
            if (result.Code >= 0) {
                return result.Data;
            }
            let subjects = new Array<ClientSubject>();
            return subjects;
        }).catch(x => this.http.handleError(x));
    }*/

    /**
     * 获取支付二维码
     * @param order 
     */
    /*QRCodePost(order: any): Observable<any> {
        order.CommunityName = this.community.Name;
        return this.http.post('PropertyClient/QRCodePost', order).map(r => {
            let result = r.json() as ApiResult<any>;
            if (result.Code >= 0) {
                return result.Data;
            }
            let qrcode = new QRCode();
            return qrcode;
        }).catch(x => this.http.handleError(x));
    }*/

    
}

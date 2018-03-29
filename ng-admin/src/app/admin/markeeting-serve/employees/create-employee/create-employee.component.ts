import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { Employee } from '@shared/service-proxies/entity/employee';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeesServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
    moduleId: module.id,
    selector: 'create-employee-modal',
    templateUrl: 'create-employee.component.html',
})
export class CreateEmployeeComponent extends AppComponentBase implements OnInit {

    
    cmodalVisible=false;
    cloading=false;
    isConfirmLoading=false;
    employeec:Employee=new Employee;
    formc:FormGroup;
    constructor(injector: Injector,private fb:FormBuilder,private employeeService:EmployeesServiceProxy) {
        super(injector);
    }

    /**
     * 页面初始加载
     */
    ngOnInit(): void {
        this.formc=this.fb.group({
            code:[null,Validators.compose([Validators.required,Validators.maxLength(50)])],
            name: [null, Validators.compose([Validators.required,Validators.maxLength(50)])],
            position: [null, [Validators.required]],
            phone: [null, Validators.compose([Validators.maxLength(20)])],
            company: [null, Validators.compose([ Validators.minLength(200)])],
            department: [null, Validators.compose([Validators.maxLength(200)])],
            isAction: [true],
        })
    }

    /**
     * 显示模态框（进入新增页）
     */
    show(){
        this.cmodalVisible=true;

    }
    
    /**
     * 取消按钮时间
     */
    chandleCancel=(e)=>{

    }
    save(){

    }
}

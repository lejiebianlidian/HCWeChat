import { Component, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { EmployeesServiceProxy, PagedResultDtoOfEmployee } from '@shared/service-proxies/service-proxies';
import { Employee } from '@shared/service-proxies/entity/employee';
import { NzModalService } from 'ng-zorro-antd';

@Component({
    moduleId: module.id,
    selector: 'employees',
    templateUrl: 'employees.component.html',
})
export class EmployeesComponent extends AppComponentBase implements OnInit {

    q: any = {
        pi: 1,
        ps: 10,
        total: 0,
        sorter: '',
        status: -1,
        statusList: [],
        search: ''
    };
    loading = false;
    status = [
        { text: '启用', value: false, type: 'success' },
        { text: '禁用', value: false, type: 'default' },
    ];
    positions = [
        { text: '零售客户', value: 1 },
        { text: '客户经理', value: 2 },
        { text: '营销人员', value: 3 },
        { text: '消费者', value: 4 },
        { text: '取消关注', value: 5 },
    ];
    employees: Employee[] = [];
    //用于删除框的员工名称显示
    employeeName: string = ''
    constructor(injector: Injector, private employeeService: EmployeesServiceProxy, private modal: NzModalService) {
        super(injector);
    }

    /**
     * 
     */
    ngOnInit(): void {
        this.refreshData();
    }

    /**
     * 分页获取员工信息
     * @param reset 是否刷新页面
     */
    refreshData(reset = false) {
        if (reset) {
            this.q.pi = 1;
        }
        this.loading = true;
        this.employeeService.getAll((this.q.pi - 1) * this.q.ps, this.q.ps, this.q.search).subscribe((result: PagedResultDtoOfEmployee) => {
            this.loading = false;
            let status = 0;
            this.employees = result.items.map(i => {
                if (i.isAction) {
                    status = 0;
                } else {
                    status = 0;
                }
                const statusItem = this.status[status];
                i.activeText = statusItem.text;
                i.activeType = statusItem.type;
                i.positionName = this.positions[i.position - 1].text;
                return i;
            });
        });
    }

    /**
     * 删除单个员工
     * @param employee 员工实体
     * @param contentTpl 弹框id
     */
    delete(employee: Employee, contentTpl): void {
        this.employeeName = employee.name;
        this.modal.confirm({
            content: contentTpl,
            okText: '是',
            cancelText: '否',
            onOk: () => {
                this.employeeService.delete(employee.id).subscribe(() => {
                    this.notify.info(this.l('删除成功！'));
                    this.refreshData();
                })
            }

        })

    }
    /**
     * 打开新建员工模态框
     */
    createEmployee() {

    }
    /**
     * 打开编辑员工模态框
     */
    editEmployee() {

    }

}

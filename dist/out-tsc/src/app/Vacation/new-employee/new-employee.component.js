import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let NewEmployeeComponent = class NewEmployeeComponent {
    constructor(httpService, formBuilder) {
        this.httpService = httpService;
        this.formBuilder = formBuilder;
        this.employees = [];
    }
    ngOnInit() {
        this.httpService.getEmployees().subscribe(employee => {
            console.log(this.employees = employee);
        });
        this.employee = this.formBuilder.group({
            eName: [''],
        });
    }
    getTrainingName() {
        alert('You created new user!');
    }
    onSubmitCreate() {
        const employeeData = {
            employeeName: this.employee.controls.eName.value,
        };
        this.httpService.addEmployee(employeeData).subscribe(employees => {
            console.log(employees);
        });
    }
};
NewEmployeeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-new-employee',
        templateUrl: './new-employee.component.html',
        styleUrls: ['./new-employee.component.css']
    })
], NewEmployeeComponent);
export { NewEmployeeComponent };
//# sourceMappingURL=new-employee.component.js.map
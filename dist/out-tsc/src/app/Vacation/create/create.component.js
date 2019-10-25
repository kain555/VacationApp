import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let CreateComponent = class CreateComponent {
    constructor(httpService, formBuilder) {
        this.httpService = httpService;
        this.formBuilder = formBuilder;
        this.employees = [];
        this.currentDate = new Date().getFullYear();
    }
    ngOnInit() {
        this.httpService.getEmployees().subscribe(employee => {
            console.log(this.employees = employee);
        });
        this.vacation = this.formBuilder.group({
            vacationID: [''],
            vacationStart: [''],
            vacationEnd: [''],
            superior: [''],
            numberOfDays: [''],
            status: ['']
        });
    }
    getTrainingName() {
        alert('You added new vacation!');
    }
    onSubmit() {
        const value = document.getElementById('empName').value;
        const superior1 = document.getElementById('supName').value;
        const vacationData = {
            vacationID: 0,
            userName: value,
            vacationStart: this.vacation.controls.vacationStart.value,
            vacationEnd: this.vacation.controls.vacationEnd.value,
            superior: superior1,
            numberOfDays: this.vacation.controls.numberOfDays.value,
            status: 'Waiting for decision'
        };
        this.httpService.addVacation(vacationData).subscribe(vacation => {
            console.log(vacation);
        });
        this.vacation.reset();
    }
};
CreateComponent = tslib_1.__decorate([
    Component({
        selector: 'app-create',
        templateUrl: './create.component.html',
        styleUrls: ['./create.component.css']
    })
], CreateComponent);
export { CreateComponent };
//# sourceMappingURL=create.component.js.map
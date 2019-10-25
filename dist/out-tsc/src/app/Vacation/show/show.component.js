import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ShowComponent = class ShowComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.vacations = [];
    }
    ngOnInit() {
        this.httpService.getVacations()
            .subscribe(vacations => this.vacations = vacations);
    }
    accept() {
        const vacationData = {
            vacationID: 63,
            status: 'Accepted'
        };
        this.httpService.AcceptVacation(vacationData).subscribe(vacation => {
            console.log(vacation);
        });
        window.location.reload();
    }
    reject() {
        const vacationData = {
            vacationID: 63,
            status: 'Rejected'
        };
        this.httpService.AcceptVacation(vacationData).subscribe(vacation => {
            console.log(vacation);
        });
        window.location.reload();
    }
};
ShowComponent = tslib_1.__decorate([
    Component({
        selector: 'app-show',
        templateUrl: './show.component.html',
        styleUrls: ['./show.component.css']
    })
], ShowComponent);
export { ShowComponent };
//# sourceMappingURL=show.component.js.map
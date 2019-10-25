import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
    }
    getVacations() {
        return this.http.get('https://localhost:44316/api/vacation');
    }
    addVacation(vacation) {
        return this.http.post('https://localhost:44316/api/vacation', vacation, {
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }
    addEmployee(employee) {
        return this.http.post('https://localhost:44316/api/employee', employee, {
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }
    getEmployees() {
        return this.http.get('https://localhost:44316/api/employee');
    }
    AcceptVacation(vacation) {
        return this.http.put('https://localhost:44316/api/vacation', vacation, {
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }
};
HttpService = tslib_1.__decorate([
    Injectable()
], HttpService);
export { HttpService };
//# sourceMappingURL=http.service.js.map
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacation } from './vacations';
import { Employee } from './new-employee/employee';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    getVacations(): Observable<Array<Vacation>> {
        return this.http.get<Array<Vacation>>('https://localhost:44316/api/vacation');
    }

    addVacation(vacation: Vacation): Observable<Vacation> {
        return this.http.post<Vacation>('https://localhost:44316/api/vacation', vacation, {
            headers: new HttpHeaders().append('Content-Type', 'application/json')});
}

    addEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>('https://localhost:44316/api/employee', employee, {
            headers: new HttpHeaders().append('Content-Type', 'application/json')});
}
    getEmployees(): Observable<Array<Employee>> {
        return this.http.get<Array<Employee>>('https://localhost:44316/api/employee');
}
    AcceptVacation(vacation: Vacation) {
    return this.http.put('https://localhost:44316/api/vacation', vacation, {
        headers: new HttpHeaders().append('Content-Type', 'application/json')});


    }
}

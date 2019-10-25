import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from './employee';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  constructor(private httpService: HttpService,  private formBuilder: FormBuilder) { }

  employee: FormGroup;
  public employees = [];

  ngOnInit() {
    this.httpService.getEmployees().subscribe(
      employee => {
        console.log(this.employees = employee);
      });
    this.employee = this.formBuilder.group({
      eName: [''],
    });
  }
  getTrainingName() {
    alert('You created new user!'); }
  onSubmitCreate() {
      const employeeData: Employee = {
        employeeName: this.employee.controls.eName.value,
      };
      this.httpService.addEmployee(employeeData).subscribe(
      employees => {
        console.log(employees);
      }
    );
  }
}

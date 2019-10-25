import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from '../http.service';
import { Vacation } from '../vacations';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit  {
  constructor(private httpService: HttpService,  private formBuilder: FormBuilder) { }

  vacation: FormGroup;
  objVacation: Vacation;
  public employees = [];
  public selectedEmp: string;
  public currentDate = new Date().getFullYear();
  ngOnInit() {
    this.httpService.getEmployees().subscribe(
      employee => {
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
     alert('You added new vacation!'); }

  onSubmit() {
    const value = (document.getElementById('empName') as HTMLSelectElement).value;
    const superior1 = (document.getElementById('supName') as HTMLSelectElement).value;
    const vacationData: Vacation = {
        vacationID: 0,
        userName: value,
        vacationStart: this.vacation.controls.vacationStart.value,
        vacationEnd: this.vacation.controls.vacationEnd.value,
        superior: superior1,
        numberOfDays: this.vacation.controls.numberOfDays.value,
        status: 'Waiting for decision'
      };
    this.httpService.addVacation(vacationData).subscribe(
      vacation => {
        console.log(vacation);
      }
    );
    this.vacation.reset();
  }
}

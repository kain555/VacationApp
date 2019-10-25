import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private httpService: HttpService,  private formBuilder: FormBuilder) { }
  vacation: FormGroup;
  public vacations = [];
  ngOnInit() {
    this.httpService.getVacations()
    .subscribe(vacations => this.vacations = vacations);
    this.vacation = this.formBuilder.group({
      vacationID: [''],
      vacationStart: [''],
      vacationEnd: [''],
      superior: [''],
      numberOfDays: [''],
      status: ['']
    });
  }

  accept() {
    const vacationData: any = {
      vacationID: this.vacation.controls.vacationID.value,
      status: 'Accepted'
    };
    this.httpService.AcceptVacation(vacationData).subscribe(
    vacation => {
      console.log(vacation);
    }
  );
    window.alert('You accepted Vacation ID: ' + this.vacation.controls.vacationID.value);
    window.location.reload();
  }

  reject() {
    const vacationData: any = {
       vacationID: this.vacation.controls.vacationID.value,
      status: 'Rejected'
    };
    this.httpService.AcceptVacation(vacationData).subscribe(
    vacation => {
      console.log(vacation);
    }
  );
    window.alert('You rejected Vacation ID: ' + this.vacation.controls.vacationID.value);
    window.location.reload();
  }
}

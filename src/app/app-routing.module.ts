import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './Vacation/create/create.component';
import { ShowComponent } from './Vacation/show/show.component';
import { NewEmployeeComponent } from './Vacation/new-employee/new-employee.component';
import { MainPageComponent } from './vacation/main-page/main-page.component';


const routes: Routes = [
  {path: 'show', component: ShowComponent},
  {path: 'create', component: CreateComponent},
  {path: 'newEmployee', component: NewEmployeeComponent},
  {path: 'MainPage', component: MainPageComponent},
  { path: '', redirectTo: '/MainPage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

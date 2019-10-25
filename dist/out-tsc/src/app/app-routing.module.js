import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './Vacation/create/create.component';
import { ShowComponent } from './Vacation/show/show.component';
import { NewEmployeeComponent } from './Vacation/new-employee/new-employee.component';
import { MainPageComponent } from './vacation/main-page/main-page.component';
const routes = [
    { path: 'show', component: ShowComponent },
    { path: 'create', component: CreateComponent },
    { path: 'newEmployee', component: NewEmployeeComponent },
    { path: 'MainPage', component: MainPageComponent },
    { path: '', redirectTo: '/MainPage', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map
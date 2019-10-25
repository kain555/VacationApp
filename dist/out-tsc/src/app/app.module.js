import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowComponent } from './Vacation/show/show.component';
import { CreateComponent } from './Vacation/create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from './Vacation/http.service';
import { NewEmployeeComponent } from './Vacation/new-employee/new-employee.component';
import { MainPageComponent } from './vacation/main-page/main-page.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            ShowComponent,
            CreateComponent,
            NewEmployeeComponent,
            MainPageComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            AppRoutingModule,
            ReactiveFormsModule,
            FormsModule
        ],
        providers: [HttpService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map
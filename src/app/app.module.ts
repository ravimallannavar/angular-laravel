import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { ChartsModule } from 'ng2-charts';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabsComponent } from './tabs/tabs.component';
import { EmployeeNextComponent } from './employee/employee-next/employee-next.component';
import { DataTablesModule } from 'angular-datatables';
import { ViewUserComponent } from './user-management/view-user/view-user.component';
import { EditUserComponent } from './user-management/edit-user/edit-user.component';
import { LoginComponent } from './login/login/login.component';
import { AddUserComponent } from './user-management/add-user/add-user.component';
import { Login } from './Module/login';
import { User } from './Module/user';
import { Department } from './Module/department';
import { Division } from './Module/division';
import { Country } from './Module/country';
import { State } from './Module/state';
import { City } from './Module/city';
import { Employee } from './Module/employee';

import { LoginService } from './Services/login.service';
import { UserService } from './Services/user.service';
import { DepartmentService } from './Services/department.service';
import { CountryService } from './Services/country.service';
import { StateService } from './Services/state.service';
import { CityService } from './Services/city.service';
import { EmployeeService } from './Services/employee.service';
import { ReportService } from './Services/report.service';
import { DivisionService } from './Services/division.service';
import { PdfService } from './Services/pdf.service';

import { HomeComponent } from './home/home.component';
import { Index1Component } from './index1/index1.component';
import { DepartmentComponent } from './system-management/department/department.component';
import { DivisionComponent } from './system-management/division/division.component';
import { CountryComponent } from './system-management/country/country.component';
import { StateComponent } from './system-management/state/state.component';
import { CityComponent } from './system-management/city/city.component';
import { ReportComponent } from './system-management/report/report.component';
import { EditDepartmentComponent } from './system-management/department/edit-department/edit-department.component';
import { AddDepartmentComponent } from './system-management/department/add-department/add-department.component';
import { AddDivisionComponent } from './system-management/division/add-division/add-division.component';
import { EditDivisionComponent } from './system-management/division/edit-division/edit-division.component';
import { EditCountryComponent } from './system-management/country/edit-country/edit-country.component';
import { AddCountryComponent } from './system-management/country/add-country/add-country.component';
import { AddCityComponent } from './system-management/city/add-city/add-city.component';
import { EditCityComponent } from './system-management/city/edit-city/edit-city.component';
import { AddStateComponent } from './system-management/state/add-state/add-state.component';
import { EditStateComponent } from './system-management/state/edit-state/edit-state.component';
import { OrderbyPipe } from './pipe/orderby.pipe';
import { EmployeeManagementComponent } from './employee-management/employee-management/employee-management.component';
import { AddEmployeeManagementComponent } from './employee-management/add-employee-management/add-employee-management.component';
import { EditEmployeeManagementComponent } from './employee-management/edit-employee-management/edit-employee-management.component';
import { PdfComponent } from './system-management/pdf/pdf.component';
import { SelectemployeeComponent } from './selectemployee/selectemployee/selectemployee.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    FormsComponent,
    ButtonsComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    AlertsComponent,
    AccordionsComponent,
    BadgesComponent,
    ProgressbarComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    DropdownComponent,
    TooltipsComponent,
    CarouselComponent,
    TabsComponent,
    EmployeeNextComponent,
    ViewUserComponent,
    EditUserComponent,
    LoginComponent,
    AddUserComponent,
    HomeComponent,
    Index1Component,
    DepartmentComponent,
    DivisionComponent,
    CountryComponent,
    StateComponent,
    CityComponent,
    ReportComponent,
    EditDepartmentComponent,
    AddDepartmentComponent,
    AddDivisionComponent,
    EditDivisionComponent,
    EditCountryComponent,
    AddCountryComponent,
    AddCityComponent,
    EditCityComponent,
    AddStateComponent,
    EditStateComponent,
    OrderbyPipe,
    EmployeeManagementComponent,
    AddEmployeeManagementComponent,
    EditEmployeeManagementComponent,
    PdfComponent,
    SelectemployeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    DataTablesModule,
    HttpClientModule,
    ChartsModule,
    AgGridModule.withComponents([])

  ],
providers: [LoginService,UserService,DepartmentService,DivisionService,CountryService,StateService,CityService,EmployeeService,ReportService,PdfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
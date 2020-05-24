import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
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
import { ViewUserComponent } from './user-management/view-user/view-user.component';
import { EditUserComponent } from './user-management/edit-user/edit-user.component';
import { LoginComponent } from './login/login/login.component';
import { AddUserComponent } from './user-management/add-user/add-user.component';
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
import { EmployeeManagementComponent } from './employee-management/employee-management/employee-management.component';
import { AddEmployeeManagementComponent } from './employee-management/add-employee-management/add-employee-management.component';
import { EditEmployeeManagementComponent } from './employee-management/edit-employee-management/edit-employee-management.component';
import { PdfComponent } from './system-management/pdf/pdf.component';
import { SelectemployeeComponent } from './selectemployee/selectemployee/selectemployee.component';


const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'employee-next', component: EmployeeNextComponent },
  { path: 'index1/:emp_id', component: Index1Component },

  { path: 'view-user', component: ViewUserComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'edit-user/:user_id', component: EditUserComponent },

  { path: 'department', component: DepartmentComponent },
  { path: 'add-department', component: AddDepartmentComponent },
  { path: 'edit-department/:dept_id', component: EditDepartmentComponent },
  
  { path: 'division', component: DivisionComponent},
    {
      path: 'add-division', component: AddDivisionComponent
    },
    {
      path: 'edit-division/:div_id', component: EditDivisionComponent
    },
  { path: 'country', component: CountryComponent },
  { path: 'add-country', component: AddCountryComponent },
  { path: 'edit-country/:country_id', component: EditCountryComponent },
  { path: 'state', component: StateComponent },
  { path: 'add-state', component: AddStateComponent },
  { path: 'edit-state/:state_id', component: EditStateComponent},

  { path: 'city', component: CityComponent },
  { path: 'add-city', component: AddCityComponent },
  { path: 'edit-city/:city_id', component: EditCityComponent },

  { path: 'employee-management', component: EmployeeManagementComponent, children: [
    { path: 'add-employee-management', component: AddEmployeeManagementComponent },
    { path: 'edit-employee-management/:emp_id', component: EditEmployeeManagementComponent },  
  ] },
  // { path: 'add-employee-management', component: AddEmployeeManagementComponent },
  // { path: 'edit-employee-management/:emp_id', component: EditEmployeeManagementComponent },

  { path: 'selectemployee', component: SelectemployeeComponent },

  { path: 'report', component: ReportComponent },
  { path :'pdf', component: PdfComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'accordions', component: AccordionsComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'progressbar', component: ProgressbarComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'dropdowns', component: DropdownComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'tabs', component: TabsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

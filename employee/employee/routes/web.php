<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/test', 'TestController@getTest');

Route::get('/department', 'DepartmentController@getDepartment');
Route::post('/adddepartment', 'DepartmentController@addDepartment');
Route::get('/getOnedepartment/{dept_id}', 'DepartmentController@GetByIdDepartment');
Route::patch('/updatedepartment/{dept_id}', 'DepartmentController@UpdateDepartment');
Route::delete('/deletedepartment/{dept_id}','DepartmentController@deleteDepartment');
// Route::get('/searchbydptname/{dept_name}', 'DepartmentController@searchbyname');


Route::get('/searchbydeptname/{dept_name}', 'DepartmentController@filterdeptname');



Route::get('/division', 'DivisionController@getDivision');
Route::post('/addDivision', 'DivisionController@addDivision');
Route::get('/getbydivision/{div_id}', 'DivisionController@GetByDivision');


Route::get('/searchbyname/{div_name}', 'DivisionController@searchbyname');


Route::patch('/updatedivision/{div_id}', 'DivisionController@UpdateDivision');
Route::delete('/deleteDivision/{div_id}','DivisionController@deleteDivision');

Route::get('/country', 'CountryController@getCountry');
Route::post('/addcountry','CountryController@addCountry');
Route::delete('/deletecountry/{country_id}','CountryController@deletecountry');
Route::get('/getbycountry/{country_id}', 'CountryController@GetByCountry');
Route::put('/updatecountry/{country_id}', 'CountryController@UpdateCountry');

Route::get('/filtercountry/{country_code}/{country_name}','CountryController@filtercountryname');

Route::get('/state', 'StateController@getState');
Route::post('/addstate', 'StateController@addState');
// Route::get('/statedatasearch/{state_name}', 'StateController@searchbystatename');
Route::get('/searchbystate/{state_name}', 'StateController@StateSearch');
Route::get('/getbystate/{state_id}', 'StateController@GetByState');
// ------getstatedatanycountry---------

Route::post('/getstatedata', 'StateController@GetStateData');

// ------getstatedatanycountry---------

Route::put('/updatestate/{state_id}', 'StateController@UpdateState');
Route::delete('/deletestate/{state_id}', 'StateController@deleteState');



Route::get('/getcity', 'CityController@getCity');
Route::post('/addcity', 'CityController@addCity');
Route::get('/CitySearch/{city_name}','CityController@CitySearch');
Route::get('/getbycity/{city_id}','CityController@GetByCity');
Route::put('/UpdateCity/{city_id}','CityController@UpdateCity');
Route::delete('/deleteCity/{city_id}','CityController@deleteCity');
// -------------getcitybystate------------
// getcitydata
Route::post('/getcitydata', 'CityController@getcitydata');

// -------------getcitybystate------------

Route::get('/getEmployee', 'EmployeeController@getEmployee');
Route::get('/filteremployee/{first_name}/{department_name}', 'EmployeeController@filteremployee');
// Route::post('/addEmployee', 'EmployeeController@addEmployee');
Route::post('/addemployee', 'EmployeeController@addEmployee');
Route::delete('/deleteEmployee/{emp_id}', 'EmployeeController@deleteEmployee');
// GetByState UpdateState
Route::get('/GetByEmployee/{emp_id}', 'EmployeeController@GetByEmployee');
Route::post('/updateEmployee/{emp_id}', 'EmployeeController@updateEmployee');

Route::get('/countEmployee', 'EmployeeController@countEmployee');

Route::get('/reportfilter/{birthday}/{hiered_date}', 'ReportController@reportfilter');
Route::get('/getReport', 'ReportController@getReport');


// --------->count employee<-------------
Route::get('/getEmployees', 'EmployeeDataController@getEmployees');
Route::get('/GetByEmployeeData/{emp_id}', 'EmployeeDataController@GetByEmployeeData');  
Route::get('/getselectEmployee', 'EmployeeController@getselectEmployee');
// --------->count employee<-------------

// --------->user register<-------------
Route::get('/getUser', 'UserManagementController@getUser');
Route::post('/addUser', 'UserManagementController@addUser');
Route::get('/GetByUser/{user_id}', 'UserManagementController@GetByUser');
Route::get('/searchUser/{user_name}/{first_name}/{last_name}/{email_address}', 'UserManagementController@searchUser');
Route::put('/updateUser/{user_id}', 'UserManagementController@updateUser');
Route::delete('/deleteUser/{user_id}', 'UserManagementController@deleteUser');

// --------->user register<-------------

// ------------>user login<---------------

Route::post('/login', 'LoginController@login');

// ------------>user login<---------------

// --------------->password reset<---------------
Route::patch('/PasswordReset/{user_id}', 'passwordresetcontroller@PasswordReset');
// --------------->password reset<---------------
Route::get('/filteremployeebyname/{first_name}', 'EmployeeController@filteremployeebyname');  
Route::get('/selectbyname/{first_name}', 'EmployeeController@selectbyname');  

Route::get('/getChart', 'chartController@getChart');  


// <?php
// namespace App\Models;
// use DB;
// class Login
// {

//     function login($email,$password,$username){
//         if
//         ($data=DB::table('user')->where('email_address',  '=', $email)->where('password', '=', $password)->get()->first()){
//             return "success with email";
//         }elseif($data=DB::table('user')->where('user_name',  '=', $username)->where('password', '=', $password)->get()->first())
//         {
//             return "success with username";

//         }
        
//         return $data;
//     }
// }
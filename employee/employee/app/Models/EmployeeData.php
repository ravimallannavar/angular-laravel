<?php
namespace App\Models;
use DB;
use App\Models\State;
use App\Models\City;
use App\Models\Country;
use App\Models\Department;
use App\Models\Division;

class EmployeeData
{
    function getEmployees()
    {
        $data=DB::table('employee')
        ->leftJoin('city', 'employee.emp_cityid', '=', 'city.city_id')
        ->leftJoin('department', 'employee.emp_dept', '=', 'department.dept_id')
        ->leftJoin('statedata', 'employee.emp_stateid', '=', 'statedata.state_id')
        ->leftJoin('country', 'employee.emp_countryid', '=', 'country.country_id')
        ->leftJoin('division', 'employee.emp_divid', '=', 'division.div_id')
        ->select('employee.*','department.dept_name as department_name', 'department.dept_id as emp_dept', 'division.div_name as division_name', 'division.div_id as emp_divid')
        
        ->get();
        return $data;
    }

    function countEmployees(){
        $data=DB::table('employee')->get()->count();
        return $data;
    
        }

}

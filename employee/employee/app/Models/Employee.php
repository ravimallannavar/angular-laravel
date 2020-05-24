<?php
namespace App\Models;
use DB;
use App\Models\State;
use App\Models\City;
use App\Models\Country;
use App\Models\Department;
use App\Models\Division;

class Employee
{
    function getEmployee()
    
    {
        // $data=DB::table('city')
        // ->join('statedata','city.s_id', '=', 'statedata.state_id')
        // ->select('city.city_id', 'city.city_name', 'statedata.state_name as state_name', 'statedata.state_id as s_id')
       
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

        function countEmployee(){
    $data=DB::table('employee')->get()->count();
    return $data;

    }

    function filteremployee($id,$name){
        
        $data=DB::table('employee')->where('first_name','LIKE', "%$id%")->where('emp_dept','LIKE', "%$name%")->get();
        return $data;

    }

    function addEmployee($data)
    {
        DB::table('employee')->insert($data);

        // dd($data);
    }



    // function CitySearch($id){
    //     $data=DB::table('city')->where('city_name','LIKE', "%$id%")->get();
    //     return $data;
    // }

    function GetByEmployee($id){
        $data=DB::table('employee')->where('emp_id',$id)->get()->first();
        return $data;
    }

    // function  UpdateCity($id, $data){
    //     DB::table('city')->where('city_id',$id)->update($data);
    // }

    function deleteEmployee($id)
    {
        DB::table('employee')->where('emp_id',$id)->delete();
    }
    
    function updateEmployee($id,$data)
    {
        DB::table('employee')->where('emp_id',$id)->update($data);
    }

    function filterhieredemployees($id,$to){
        $data=DB::table('employee')->where('birthday','LIKE', "%$id%")->where('hiered_date','LIKE', "%$to%")->get();
        return $data;

    }


}

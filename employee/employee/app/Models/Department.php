<?php
namespace App\Models;
use DB;
class Department
{
    function getDepartment()
    {
        $data=DB::table('department')->get();
        return $data;
    }

    function addDepartment($data)
    {
        DB::table('department')->insert($data);
    }

    function GetByIdDepartment($id){
        $data=DB::table('department')->where('dept_id',$id)->get()->first();
        return $data;
    }


    function filterdeptname($id){
        $data=DB::table('department')->where('dept_name','LIKE', "%$id%")->get();
        return $data;
    }

    // function UpdateDepartment($id,$data){
    //     DB::table('department')->where('dept_id',$id)->update($data);
    // }

    function UpdateDepartment($id,$data)
    {
        // DB::table('department')->where('dept_id',$id)->update($data);
            DB::table('department')->where('dept_id',$id)->update($data);
    }

    function deleteDepartment($id)
    {
        DB::table('department')->where('dept_id',$id)->delete();
    }

}

<?php
namespace App\Models;
use DB;
class Division
{
    function getDivision()
    {
        $data=DB::table('division')->get();
        return $data;
    }

    function addDivision($data)
    {
        DB::table('division')->insert($data);
    }

    function deleteDivision($id)
    {
        DB::table('division')->where('div_id',$id)->delete();
    }

    function GetByDivision($id){
        $data=DB::table('division')->where('div_id',$id)->get()->first();
        return $data;
    }

    function searchbyname($id){
        $data=DB::table('division')->where('div_name','LIKE', "%$id%")->get();
        return $data;

    }
  

    function  UpdateDivision($id, $data){
        DB::table('division')->where('div_id',$id)->update($data);
    }
}
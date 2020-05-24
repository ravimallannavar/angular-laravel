<?php
namespace App\Models;
use DB;
class Country
{
    function getCountry()
    {
        $data=DB::table('country')->get();
        return $data;
    }

    function filtercountryname($id,$name){
        $data=DB::table('country')->where('country_code','LIKE', "%$id%")->where('country_name','LIKE', "%$name%")->get();
        return $data;
    }

    // addCountry
    function addCountry($data)
    {
        DB::table('country')->insert($data);
    }

    function deletecountry($id)
    {
        DB::table('country')->where('country_id',$id)->delete();
    }

    function GetByCountry($id){
        $data=DB::table('country')->where('country_id',$id)->get()->first();
        return $data;
    }

    function  UpdateCountry($id, $data){
        DB::table('country')->where('country_id',$id)->update($data);
    }

}

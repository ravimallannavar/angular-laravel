<?php
namespace App\Models;
use DB;
use App\Models\State;
class City
{
    function getCity()
    
    {
        $data=DB::table('city')
        ->join('statedata','city.s_id', '=', 'statedata.state_id')
        ->select('city.city_id', 'city.city_name', 'statedata.state_name as state_name', 'statedata.state_id as s_id')
        // ->select('statedata.*', 'country.country_name')
        ->get();
        return $data;
    }

    function getcitydata($s_id){
        $data=DB::table('city')->where('s_id',$s_id)->get();
        return $data;
    }

    function addCity($data)
    {
        DB::table('city')->insert($data);
    }

    function CitySearch($id){
        $data=DB::table('city')->where('city_name','LIKE', "%$id%")->get();
        return $data;
    }

    function GetByCity($id){
        $data=DB::table('city')->where('city_id',$id)->get()->first();
        return $data;
    }

    function  UpdateCity($id, $data){
        DB::table('city')->where('city_id',$id)->update($data);
    }

    function deleteCity($id)
    {
        DB::table('city')->where('city_id',$id)->delete();
    }

    // function searchbyname($id){
    //     $data=DB::table('division')->where('div_name','LIKE', "%$id%")->get();
    //     return $data;

    // }

    // ->select('statedata.state_id', 'statedata.state_name', 'country.country_name as c_id', 'country.country_id as c_id')

    
    // 'state.id', 'state.name', 'country.name as country_name', 'country.id as country_id'

}

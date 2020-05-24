<?php
namespace App\Models;
use DB;
use App\Models\Country;
class State
{
    function getState()
    
    {
        $data=DB::table('statedata')
        ->join('country','statedata.c_id', '=', 'country.country_id')
        ->select('statedata.state_id', 'statedata.state_name', 'country.country_name as country_name', 'country.country_id as c_id')
        // ->select('statedata.*', 'country.country_name')
        ->get();
        return $data;
    }

    function GetStateData($c_id){
        $data=DB::table('statedata')->where('c_id',$c_id)->get();
        return $data;
    }

    function addState($data)
    {
        DB::table('statedata')->insert($data);
    }

    function StateSearch($id){
        $data=DB::table('statedata')->where('state_name','LIKE', "%$id%")->get();
        return $data;
    }

    function GetByState($id){
        $data=DB::table('statedata')->where('state_id',$id)->get()->first();
        return $data;
    }

    function  UpdateState($id, $data){
        DB::table('statedata')->where('state_id',$id)->update($data);
    }

    function deleteState($id)
    {
        DB::table('statedata')->where('state_id',$id)->delete();
    }
    // ->select('statedata.state_id', 'statedata.state_name', 'country.country_name as c_id', 'country.country_id as c_id')

    
    // 'state.id', 'state.name', 'country.name as country_name', 'country.id as country_id'

}

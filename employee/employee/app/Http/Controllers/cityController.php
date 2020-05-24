<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\City;
use Illuminate\Http\Request;


class CityController extends Controller
{
    function getCity()
    {
        $cityModel=new city();
        $data=$cityModel->getCity();
        return response()->json($data);
    }

    function getcitydata(Request $request){
        $s_id = $request->s_id;
        $cityModel = new City();
        $data=$cityModel->getcitydata($s_id);
        // dd($data);
        return response()->json($data);
    }

    function addCity(Request $request){
        $cityModel=new city();
        $data=$cityModel->addCity($request->all());
    }

    function CitySearch(Request $request){
        $id=$request->city_name;
        $cityModel=new City();
        $data=$cityModel->CitySearch($id);
        return response()->json($data);
    }

    function GetByCity(Request $request){
        $id=$request->city_id;
        $cityModel=new City();
        $data=$cityModel->GetByCity($id);
        return response()->json($data);
    }

    function UpdateCity(Request $request){
        $id=$request->city_id;
        $cityModel=new City();
        $data=$cityModel->UpdateCity($id, $request->all());
    }

    function deleteCity(Request $request){
        $id=$request->city_id;
        $cityModel=new City();
        $cityModel->deleteCity($id);
    }

}

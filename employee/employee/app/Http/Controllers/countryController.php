<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\Country;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    function getCountry()
    {
        $countryModel=new Country();
        $data=$countryModel->getCountry();
        return response()->json($data);
    }

    function filtercountryname(Request $request){
        $id=$request->country_code;
        $name=$request->country_name;

        $countryModel=new Country;
        $data=$countryModel->filtercountryname($id,$name);
        return response()->json($data);

        // $data=$departmentModel->addDepartment($request->all());

    }

    function addCountry(Request $request)
    {
        $countryModel=new Country();
        $data=$countryModel->addCountry($request->all());
    }

    function deletecountry(Request $request){
        $id=$request->country_id;
        $countryModel=new Country();
        $countryModel->deletecountry($id);
    }

    function GetByCountry(Request $request){
        $id=$request->country_id;
        $countryModel=new Country();
        $data=$countryModel->GetByCountry($id);
        return response()->json($data);
    }


    function UpdateCountry(Request $request){
        $id=$request->country_id;
        $countryModel=new Country();
        $data=$countryModel->UpdateCountry($id, $request->all());
    }

}

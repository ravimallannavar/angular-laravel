<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\Division;
use Illuminate\Http\Request;

class DivisionController extends Controller
{
    function getDivision()
    {
        $divisionModel=new Division();
        $data=$divisionModel->getDivision();
        return response()->json($data);
    }

    function addDivision(Request $request){
        $divisionModel=new Division();
        $data=$divisionModel->addDivision($request->all());
    }

    function deleteDivision(Request $request){
        $id=$request->div_id;
        $divisionModel=new Division();
        $divisionModel->deleteDivision($id);
    }

    function GetByDivision(Request $request){
        $id=$request->div_id;
        $divisionModel=new Division();
        $data=$divisionModel->GetByDivision($id);
        return response()->json($data);
    }

    function searchbyname(Request $request){
        $id=$request->div_name;
        $divisionModel=new Division();
        $data=$divisionModel->searchbyname($id);
        return response()->json($data);
    }

    function UpdateDivision(Request $request){
        $id=$request->div_id;
        $divisionModel=new Division();
        $data=$divisionModel->UpdateDivision($id, $request->all());
    }

} 

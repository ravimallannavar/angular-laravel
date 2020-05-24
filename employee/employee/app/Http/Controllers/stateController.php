<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\State;
use Illuminate\Http\Request;


class StateController extends Controller
{
    function getState()
    {
        $stateModel=new State();
        $data=$stateModel->getState();
        return response()->json($data);
    }

    function GetStateData(Request $request)
    {
        $c_id = $request->c_id;
        // dd($country_id);
        $stateModel=new State();
        $data=$stateModel->GetStateData($c_id);
        return response()->json($data);
    }

    function addState(Request $request){
        $stateModel=new State();
        $data=$stateModel->addState($request->all());
    }

    function StateSearch(Request $request){
        $id=$request->state_name;
        $stateModel=new State();
        $data=$stateModel->StateSearch($id);
        return response()->json($data);
    }

    function GetByState(Request $request){
        $id=$request->state_id;
        $stateModel=new State();
        $data=$stateModel->GetByState($id);
        return response()->json($data);
    }

    function UpdateState(Request $request){
        $id=$request->state_id;
        $stateModel=new State();
        $data=$stateModel->UpdateState($id, $request->all());
    }

    function deleteState(Request $request){
        $id=$request->state_id;
        $stateModel=new State();
        $stateModel->deleteState($id);
    }

}

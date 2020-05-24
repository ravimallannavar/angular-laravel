<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\Department;
use Illuminate\Http\Request;


class DepartmentController extends Controller
{
    function getDepartment()
    {
        // echo "hello";
        // return view('hello');
        $departmentModel=new Department();
        $data=$departmentModel->getDepartment();
        return response()->json($data);
    }

    function addDepartment(Request $request)
    {
        $departmentModel=new Department();
        $data=$departmentModel->addDepartment($request->all());
    }

    function GetByIdDepartment(Request $request)
    {
        $id=$request->dept_id;
        $departmentModel=new Department();
        $data=$departmentModel->GetByIdDepartment($id);
        return response()->json($data);
    }

    function filterdeptname(Request $request){
        $id=$request->dept_name;
        $departmentModel=new Department();
        $data=$departmentModel->filterdeptname($id);
        return response()->json($data);
    }
    
    // function searchbyname(Request $request){
    //     $id=$request->div_name;
    //     $divisionModel=new Division();
    //     $data=$divisionModel->searchbyname($id);
    //     return response()->json($data);
    // }

    function UpdateDepartment(Request $request)
    {
        $id=$request->dept_id;
        $departmentModel=new Department();
        $data=$departmentModel->UpdateDepartment($id, $request->all());
    }

    function deleteDepartment(Request $request)
    {
        $id=$request->dept_id;
        $departmentModel=new Department;
        $departmentModel->deleteDepartment($id);
    }

}
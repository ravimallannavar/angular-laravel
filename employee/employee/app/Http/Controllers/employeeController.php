<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    function getEmployee()
    {
        $employeeModel=new Employee();
        $data=$employeeModel->getEmployee();
        // $totalCount = $employeeModel->countEmployee();
        // $response["totalRecord"] = $totalCount;
        return response()->json($data);
    }

    function getselectEmployee()
    {
        $employeeModel=new Employee();
        $data=$employeeModel->getselectEmployee();
        return response()->json($data);
    }


   function filteremployeebyname(Request $request){
        $id=$request->first_name;
        $employeeModel=new Employee();
        $data=$employeeModel->filteremployeebyname($id);
        return response()->json($data);

    }
     
    function selectbyname(Request $request){
        $id=$request->first_name;
        $employeeModel=new Employee();
        $data=$employeeModel->selectbyname($id);
        return response()->json($data);
    }
    
    function filteremployee(Request $request){
        $id=$request->first_name;
        $name=$request->emp_dept;

        $employeeModel=new Employee;
        $data=$employeeModel->filteremployee($id,$name);
        return response()->json($data);

        // $data=$departmentModel->addDepartment($request->all());

    }

    function addEmployee(Request $request){

        $file = $request->file('file');
        // dd($file);
        $uploadPath = "public/image";
        $originalImage = $file->getClientOriginalName();
        // dd($originalImage);
        $file->move($uploadPath,  $originalImage);

        $employeeData = json_decode($request->data,true);
        $employeeData["image"] =  $originalImage;
        $employeeModel=new Employee();
        // dd($employeeModel);
        $data=$employeeModel->addEmployee($employeeData);
        // dd($data);
        // $data=$employeeModel->addEmployee($request->all());
    }


    function GetByEmployee(Request $request){
        $id=$request->emp_id;
        $employeeModel=new Employee();
        $data=$employeeModel->GetByEmployee($id);
        return response()->json($data);
    }

    function updateEmployee(Request $request) {
        $data = json_decode($request->getContent());
        // $data = json_decode($data);
        // dd($data);
        $file = $request->file('file');
        // dd($file);
        // $employeeData = json_decode($request->data,true);
        // dd($employeeData);
        $uploadPath = "public/image";
        // dd($uploadPath);
        $originalImage = $file->getClientOriginalName();
        // dd($originalImage);
        $file->move($uploadPath,  $originalImage);
        // dd($uploadPath);
        $employeeData = json_decode($request->data,true);
        $employeeData["image"] =  $originalImage;
        // dd($employeeData);
        // print_r($employeeData);
        $id=$request->emp_id;
        print_r($id);
        $employeeModel=new Employee();
        $data=$employeeModel->updateEmployee($id, $employeeData);
        // dd($data);
    }

    function deleteEmployee(Request $request){
        $id=$request->emp_id;
        $employeeModel=new Employee();
        $employeeModel->deleteEmployee($id);
    }



}


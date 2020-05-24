<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\Employee;
use App\Models\Report;

use Illuminate\Http\Request;


class ReportController extends Controller
{

    function reportfilter(Request $request){
        $from=$request->birthday;
        $to=$request->hiered_date;

        $reportModel=new Report;
        $data=$reportModel->reportfilter($from,$to);
        return response()->json($data);

        // $data=$departmentModel->addDepartment($request->all());

    }

    function getReport()
    {
        $reportModel=new Report;
        $data=$reportModel->getReport();
        return response()->json($data);
    }





}































function filterhieredemployees(Request $request){
        $id=$request->birthday;
        $to=$request->hiered_date;

        $employeeModel=new Country;
        $data=$employeeModel->filterhieredemployees($id,$to);
        return response()->json($data);

        // $data=$departmentModel->addDepartment($request->all());

    }
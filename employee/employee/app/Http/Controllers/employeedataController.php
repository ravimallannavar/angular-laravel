<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\EmployeeData;
use App\Models\Employee;
use Illuminate\Http\Request;


class EmployeeDataController extends Controller
{

    function getEmployees()
    {
        $employeeModel=new EmployeeData();
        $data=$employeeModel->getEmployees();
        $totalCount = $employeeModel->countEmployees();
        $response["totalRecord"] = $totalCount;
        return response()->json($response);
    }

}


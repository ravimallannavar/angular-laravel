<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\Test;

class TestController extends Controller
{
    function getTest()
    {
        // $testModel=new Test();
        // $testModel->getTest();
        $testModel=new Test();
        $testModel->getTest();
        // echo "hello";
        // return view('welcome to test controller');  
    }
}
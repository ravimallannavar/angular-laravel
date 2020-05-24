<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\Chart;
use Illuminate\Http\Request;

class chartController extends Controller
{
    function getChart()
    {
        $chartModel=new chart();
        $data=$chartModel->getChart();
        return response()->json($data);
    }

}


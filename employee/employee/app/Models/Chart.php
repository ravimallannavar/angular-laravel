<?php
namespace App\Models;
use DB;
use App\Models\State;
class Chart
{
    
    
    function getChart()
    {
        $data=DB::table('monthdata')->get();
        return $data;
    }


}

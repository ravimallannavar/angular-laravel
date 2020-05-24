<?php
namespace App\Http\Controllers;
use Illuminate\Support\Facades\Response;

use App\Http\Controllers\Controller;
use App\Models\UserManagement;
use App\Models\Login;
use Illuminate\Http\Request;
// use Response;


class LoginController extends Controller
{
    function login(Request $request){
        $email=$request->email_address;
        $password=$request->password;

        $loginModel=new Login;
        $data=$loginModel->login($email,$password);
        // $status=$loginModel->login($email,$password);
        $status["status"] = $data;
        // dd($response);
        return response()->json($data);

    }
}
   
<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\PasswordReset;
use Illuminate\Http\Request;

class passwordresetcontroller extends Controller
{
    // function PasswordReset(Request $request){
    //     $email=$request->email_address;

    //     $PasswordResetModel=new PasswordReset;
    //     $data=$PasswordResetModel->PasswordReset($email);
    //     return response()->json($data);
    // }    

    function PasswordReset(Request $request){
        $id=$request->user_id;
        $PasswordResetModel=new PasswordReset;
        $data=$PasswordResetModel->PasswordReset($id, $request->all());
    }


}


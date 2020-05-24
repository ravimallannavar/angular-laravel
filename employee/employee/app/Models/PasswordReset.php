<?php

namespace App\Models;
use DB;

// use Illuminate\Database\Eloquent\Model;

class PasswordReset
{
    // function PasswordReset($email){
    //     if
    //     ($data=DB::table('user')->where('email_address',  '=', $email)->get()->first()){
    //         return "password reset successfull";
    //     }else{
    //         return "password reset not successfull";

    //     }
        
    //     return $data;
    // }

    function  PasswordReset($id, $data){
        // if(
        // DB::table('user')->where('email_address', $email)->update($data)
        // ){
        //     return "password reset successfull";
        // }else{
        //     return "password reset not successfull";
        // }
        if(
        DB::table('user')->where('user_id', $id)->update($data)
        ){
            return "password reset successfull";
        }else{
            return "password reset not successfull";
        }
        // DB::table('user')->where('user_id', $id)->update($data);
    }
}

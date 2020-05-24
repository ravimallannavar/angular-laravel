<?php
namespace App\Models;
// use Illuminate\Http\Response as HttpResponse;
use Response;
use Illuminate\Support\Facades\Storage;

// use Illuminate\Support\Facades\Response;
// use Illuminate\Http\Response;

use DB;
// use Response;
class Login
{



//     function login($email,$password){
//         if
//         ($data=DB::table('user')->where('email_address',  '=', $email)->where('password', '=', $password)
//         ->get()->first()){
//            return \Responce::json(['user'=>$data],200);
            
//         }
//         else{

        
//         // return Responce::json(['error'=>'not a valid user'],409);
//     }
// }

    // function login($email,$password){
     
    //     $data=DB::table('user')->where('email_address',  '=', $email)->where('password', '=', $password)
    //     ->get()->first();
    //     if($data->status == 0){
    //          "Login Successfull";
    //     }
    //     else{
    //          "Login Failed Wrong data";
    //     }
        
    //     return $data;
    // }


function login($email,$password){
    // LoginStatus: '';
    $status = '';
    
    $data=DB::table('user')->where('email_address', $email)->where('password', $password)
    ->get()->first();
        if($status == 0){
        return $data;
    }elseif($status == 1){
        return "Wrong Credentials";

    }
    

///////////////////////////////////////////////////////////////////////////////////////////////

    // function login($email,$password){
    //     if
    //     ($data=DB::table('user')->where('email_address',  '=', $email)->where('password', '=', $password)
    //     ->first()){
    //         return $data;
            
    //     }elseif($data=DB::table('user')->where('email_address',  '=', $email)->where('password', '=', $password)
    //     ->first())
    //     {
    //         return "success with username";

    //     }
        
    //     // return $data;
    // }

    


}}
//////////////////////////////////////////////////////////////////////////////////////////////////
// if($user->role->id == 1) {
//     return redirect()->intended('/admin'); // it will be according to your routes.

// } else {
//     return redirect()->intended('/'); // it also be according to your need and routes
// }
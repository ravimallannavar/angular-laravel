<?php
namespace App\Models;
use DB;
class UserManagement
{
    function getUser()
    {
        $data=DB::table('user')->get();
        return $data;
    }

    function addUser($data)
    {
        DB::table('user')->insert($data);
    }

    function GetByUser($id)
    {
        $data=DB::table('user')->where('user_id', $id)->get()->first();
        return $data;
    }

    function searchUser($u_name,$f_name,$l_name,$email)
    {
        $data=DB::table('user')->where('user_name', 'LIKE', "%$u_name%")->where('first_name', 'LIKE', "%$f_name%")->where('last_name', 'LIKE', "%$l_name%")->where('email_address', 'LIKE', "%$email%")->get();
        return $data;
    }

        function updateUser($id, $data){
            DB::table('user')->where('user_id', $id)->update($data);
        }

        function deleteUser($id)
        {
            DB::table('user')->where('user_id', $id)->delete();
        }

}

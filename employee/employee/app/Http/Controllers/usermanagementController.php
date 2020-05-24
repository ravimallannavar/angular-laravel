<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\UserManagement;
use Illuminate\Http\Request;

class UserManagementController extends Controller
{
    function getUser()
    {
        $userModel = new UserManagement();
        $data=$userModel->getUser();
        return response()->json($data); 
    }

    function addUser(Request $request)
    {
        $userModel = new UserManagement();
        $data=$userModel->addUser($request->all());
    }

    function GetByUser(Request $request)
    {
        $id=$request->user_id;
        $userModel = new UserManagement();
        $data = $userModel->GetByUser($id);
        return response()->json($data);
    }

    function searchUser(Request $request)
    {
        $u_name=$request->user_name;
        $f_name=$request->first_name;
        $l_name=$request->last_name;
        $email=$request->email_address;
        $userModel = new UserManagement();
        $data=$userModel->searchUser($u_name,$f_name,$l_name,$email);
        return response()->json($data);
    }

    function updateUser(Request $request)
    {
        $id = $request->user_id;
        $userModel = new UserManagement();
        $data = $userModel->updateUser($id, $request->all());
    }

    function deleteUser(Request $request)
    {
        $id = $request->user_id;
        $userModel = new UserManagement();
        $data = $userModel->deleteUser($id);
    }

}

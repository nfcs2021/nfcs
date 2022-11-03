<?php

namespace App\Http\Controllers;

use App\Models\front_desk_login_det;
use Illuminate\Http\Request;

class FrontDeskLoginDetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getlogin($User_Name)
    {

      //return front_desk_login_det::all();
      return response()->json(front_desk_login_det::orderBy('Last_login_time', 'DESC')->where('User_Name',$User_Name)->first());
    }



    public function getloginById($id)
    {
       $login = front_desk_login_det::find($id);  
       if(is_null( $login))
       {
         return 'login id  not found';
       } 
       return  $login; 
    } 
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function addlogin(Request $request)
    {
        $data = front_desk_login_det::get()->where('Email',$request->Email);
         if(count($data)<=5)
         {
            $login = front_desk_login_det::create($request->all());
         }
         else
         {
            $previousData = front_desk_login_det::orderBy('Last_login_time', 'ASC')->first();
            front_desk_login_det::where('id',$previousData->id)->delete();
            $login = front_desk_login_det::create($request->all());
         }
        
        return $login;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updatelogin(Request $request,$id)
    {
        $login = front_desk_login_det::find($id);
       if(is_null($login))
       {
           return 'patient not found';
       }
       $login->update($request->all());
       return $login;
    }

    public function authenticated(Request $request, $user)
    {
        event(new loginevent($user->Email, $user->PCP_Name, $user->Password, $user->Last_login_time ));
    }

    public function destroy($id)
    {
        $login = front_desk_login_det::find($id);
       if(is_null($login))
       {
           return 'id not found';
       }
       $patient->delete();
       return $patient;
    }




    /**
     * Display the specified resource.
     *
     * @param  \App\Models\front_desk_login_det  $front_desk_login_det
     * @return \Illuminate\Http\Response
     */
    public function show(front_desk_login_det $front_desk_login_det)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\front_desk_login_det  $front_desk_login_det
     * @return \Illuminate\Http\Response
     */
    public function edit(front_desk_login_det $front_desk_login_det)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\front_desk_login_det  $front_desk_login_det
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, front_desk_login_det $front_desk_login_det)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\front_desk_login_det  $front_desk_login_det
     * @return \Illuminate\Http\Response
     */
    // public function destroy(front_desk_login_det $front_desk_login_det)
    // {
    //     //
    // }
}

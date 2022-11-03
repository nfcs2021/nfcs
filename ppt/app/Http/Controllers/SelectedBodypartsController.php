<?php

namespace App\Http\Controllers;
use App\Models\Selected_body_parts;

use Illuminate\Http\Request;

class SelectedBodypartsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getSelectedpart()
    {
        return selected_body_parts::get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getSelectedpartById($id)
    {
        $selected=selected_body_parts::where('Record_id',$id)->get();
        if(is_null($selected))
        {
            return 'Answer not found';
        }
         return  $selected;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addselectedparts(Request $request)
    {
        $selected = selected_body_parts::create($request->all());
        return $selected;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function editselectedpart(Request $request ,$id)
    {
        $selected = selected_body_parts::find($id);
        if(is_null($selected))
        {
            return 'patient not found';
        }
        $selected->update($request->all());
        return $selected;
    }
    public function deleteselectedpart($id)
    {
        $selected = selected_body_parts::find($id);
        if(is_null( $selected ))
        {
            return 'patient not found';
        }
        $selected->delete();
        return  $selected ;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

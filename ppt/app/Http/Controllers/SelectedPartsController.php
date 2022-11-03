<?php

namespace App\Http\Controllers;

use App\Models\selected_parts;
use Illuminate\Http\Request;

class SelectedPartsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getSelectedParts()
    {
        return Selected_parts::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getSelectedPartsById($id)
    {
        $select = Selected_parts::find($id);
        if(is_null($select))
        {
            return 'selected parts not found';
        }
        return $select;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addParts(Request $request)
    {
        $select = Selected_parts::create($request->all());
        return $select;
    }
    // public function addparts(Request $request)
    // {
    //     $selected = selected_body_parts::create($request->all());
    //     return $selected;
    // }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\selected_parts  $selected_parts
     * @return \Illuminate\Http\Response
     */
    public function show(selected_parts $selected_parts)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\selected_parts  $selected_parts
     * @return \Illuminate\Http\Response
     */
    public function updateSelectedParts(Request $request, $id)
    {
        $select = Selected_parts::find($id);
        if(is_null($select))
        {
            return 'selected part not found';
        }
        $select->update($request->all());
        return $select;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\selected_parts  $selected_parts
     * @return \Illuminate\Http\Response
     */
    public function deleteSelectedParts($id)
    {
        $select = Selected_parts::find($id);
        if(is_null($select))
        {
            return 'selected part not found';
        }
        $select->delete();
        return $select;

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\selected_parts  $selected_parts
     * @return \Illuminate\Http\Response
     */
    public function destroy(selected_parts $selected_parts)
    {
        //
    }
}

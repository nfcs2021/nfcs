<?php

namespace App\Http\Controllers;

use App\Models\patientEntryRecord;
use Illuminate\Http\Request;

class PatientEntryRecordController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getpatientrecord()
    {
        return patientEntryRecord::with('Questionary_answers')->with('selected_body_parts')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getpatientrecordById($id)
    {
        $patientrecord=patientEntryRecord::with('Questionary_answers')->with('selected_body_parts')->find($id);
        if(is_null($patientrecord))
        {
            return 'record not found';
        }
         return $patientrecord;
    }

    public function addpatientrecord(Request $request)
    {
        $patientrecord=patientEntryRecord::create($request->all());
        return $patientrecord;
    }

    public function updaterecord(Request $request,$id)
    {
        $patientrecord=patientEntryRecord::find($id);
        if(is_null($patientrecord))
        {
            return 'id not found';
        }
        $patientrecord->update($request->all());
        return  $patientrecord;
    }

    public function deleterecord($id)
    {
        $patientrecord=patientEntryRecord::find($id);
        if(is_null($patientrecord))
        {
            return 'id not found';
        }
        $patientrecord->delete();
        return $patientrecord;

    }

    public function getpatientrecordByPatientId($id)

    {
       $patientrecord=patientEntryRecord::where('Patient_id',$id)->orderBy('Visit_time', 'desc')->get();

        if(is_null($patientrecord))

        {
           return 'record not found';
        }
        return $patientrecord;
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\patientEntryRecord  $patientEntryRecord
     * @return \Illuminate\Http\Response
     */
    public function show(patientEntryRecord $patientEntryRecord)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\patientEntryRecord  $patientEntryRecord
     * @return \Illuminate\Http\Response
     */
    public function edit(patientEntryRecord $patientEntryRecord)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\patientEntryRecord  $patientEntryRecord
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, patientEntryRecord $patientEntryRecord)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\patientEntryRecord  $patientEntryRecord
     * @return \Illuminate\Http\Response
     */
    public function destroy(patientEntryRecord $patientEntryRecord)
    {
        //
    }
}

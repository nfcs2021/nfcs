<?php

namespace App\Http\Controllers;
use App\Models\patient_data;
use Illuminate\Http\Request;

class PatientDataController extends Controller
{


public function getPatientDataRcords($email){
    
    $patientRecords = Patient_data::where('emailaddress',$email)->get();
return $patientRecords;
}

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getPatientData()
    {
        return response()->json(Patient_data::orderBy('created_at', 'DESC')->get());
    }
   


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getPatientDataById($id)
    {
        $patient = Patient_data::find($id);
        if(is_null($patient))
        {
            return response()->json(['message'=>'patient not Found'], 404);
        }
        
        return response()->json($patient, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addPatient(Request $request)
    {
        $patient = Patient_data::create($request->all());
        return $patient;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\patient_data  $patient_data
     * @return \Illuminate\Http\Response
     */
    public function updatePatientData(Request $request,$id)
    {
       $patient = Patient_data::find($id);
       if(is_null($patient))
       {
           return 'patient not found';
       }
       $patient->update($request->all());
       return $patient;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\patient_data  $patient_data
     * @return \Illuminate\Http\Response
     */
    public function edit(patient_data $patient_data)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\patient_data  $patient_data
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\patient_data  $patient_data
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $patient = Patient_data::find($id);
       if(is_null($patient))
       {
           return 'patient not found';
       }
       $patient->delete();
       return $patient;
    }
}

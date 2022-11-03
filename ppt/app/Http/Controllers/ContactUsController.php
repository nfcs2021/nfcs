<?php

namespace App\Http\Controllers;

use App\Models\Contact_Us;
use Illuminate\Http\Request;
use App\ContactMail\ContactMail;
use Illuminate\Support\Facades\Mail;

class ContactUsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getcontact()
    {
        return Contact_Us::get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function addcontact(Request $request)
    {
        $contact = Contact_Us::create($request->all());
        return $contact;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getcontactById($id)
    {
        $contact=Contact_Us::find($id);
        if(is_null($contact))
        {
            return "id not found";
        }
        return $contact;
    }
    public function getmail(Request $request)
    {

      //Mail::to($request->email)->send(new ContactMail($request));

       Mail::to('thejashwinir.18.amca@acharya.ac.in')->send(new ContactMail($request));
       $contact = Contact_Us::create($request->all());
       return $contact;
   }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Contact_Us  $contact_Us
     * @return \Illuminate\Http\Response
     */
    public function show(Contact_Us $contact_Us)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Contact_Us  $contact_Us
     * @return \Illuminate\Http\Response
     */
    public function edit(Contact_Us $contact_Us)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Contact_Us  $contact_Us
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Contact_Us $contact_Us)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Contact_Us  $contact_Us
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contact_Us $contact_Us)
    {
        //
    }
}

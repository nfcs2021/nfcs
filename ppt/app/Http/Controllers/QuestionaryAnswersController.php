<?php

namespace App\Http\Controllers;

use App\Models\Questionary_answers;
use Illuminate\Http\Request;

class QuestionaryAnswersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAnswer()
    {
        return Questionary_answers::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAnswerById($id)
    {
        $Answers=Questionary_answers::where('Record_id',$id)->get();
        if(is_null($Answers))
        {
            return 'Answer not found';
        }
         return $Answers;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addanswer(Request $request)
    {
        $Answers=Questionary_answers::create($request->all());
        return $Answers;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Questionary_answers  $questionary_answers
     * @return \Illuminate\Http\Response
     */
    public function updateAnswer(Request $request,$id)
    {
        $Answer=Questionary_answers::find($id);
        if(is_null($Answer))
        {
            return 'id not found';
        }
        $Answer->update($request->all());
        return  $Answer;
    }
    public function deleteAnswer($id)
    {
        $Answer=Questionary_answers::find($id);
        if(is_null($Answer))
        {
            return 'id not found';
        }
        $patientrecord->delete();
        return $patientrecord;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Questionary_answers  $questionary_answers
     * @return \Illuminate\Http\Response
     */
    public function edit(Questionary_answers $questionary_answers)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Questionary_answers  $questionary_answers
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Questionary_answers $questionary_answers)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Questionary_answers  $questionary_answers
     * @return \Illuminate\Http\Response
     */
    public function destroy(Questionary_answers $questionary_answers)
    {
        //
    }
}

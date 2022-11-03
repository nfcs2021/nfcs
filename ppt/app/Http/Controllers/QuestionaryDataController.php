<?php

namespace App\Http\Controllers;

use App\Models\questionary_data;
use Illuminate\Http\Request;

class QuestionaryDataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getQuestions()
    {
       return Questionary_data::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getQuestionsById($id)
    {
        $questions = Questionary_data::find($id);
        if(is_null($questions))
        {
            return 'question not found';
        }
        return $questions;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function addQuestions(Request $request)
    {
       $questions = Questionary_data::create($request->all());
       return $questions; 
    }

   
    public function editQuestions(Request $request ,$id)
    {
        $questions = Questionary_data::find($id);
        if(is_null($questions))
        {
            return 'patient not found';
        }
        $questions->update($request->all());
        return $questions;
    }

    public function deleteQuestions($id)
    {
        $questions = Questionary_data::find($id);
        if(is_null($questions))
        {
            return 'patient not found';
        }
        $questions->delete();
        return $questions;
    }
}

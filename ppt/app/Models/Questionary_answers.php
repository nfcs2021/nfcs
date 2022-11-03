<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Questionary_answers extends Model
{
    protected $fillable = ['Record_id','Patient_id','Sub_question_id','Answers','Created_by','Updated_By'];
    protected $table = 'Questionary_answers';
    use HasFactory;
}

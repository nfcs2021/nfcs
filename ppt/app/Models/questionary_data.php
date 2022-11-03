<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class questionary_data extends Model
{
  
    protected $fillable = ['Question_id','Questions','Sub_question_id','Sub_questions','Created_by','Updated_By'];
    protected $table = 'Questionary_datas';
    use HasFactory;
    
}

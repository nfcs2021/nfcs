<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Selected_body_parts extends Model
{
    protected $fillable = ['Body_parts_id','Record_id','Patient_id'];
    protected $table = 'selected_body_parts';
    use HasFactory;
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class selected_parts extends Model
{
    
    protected $fillable = ['Body_parts_id','Part_name','Created_by'];
    protected $table = 'Body_parts';
    use HasFactory;
}

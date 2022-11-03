<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class front_desk_login_det extends Model
{
    protected $fillable = ['front_desk_id','User_Name','PCP_Name','Password'];
    protected $table = 'front_desk_login_dets';
    use HasFactory;
}

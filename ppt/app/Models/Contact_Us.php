<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact_Us extends Model
{

    protected $fillable = ['First_Name','Email','Message','Subject','Contact_number'];
    protected $table = 'contact_us';
    use HasFactory;
}

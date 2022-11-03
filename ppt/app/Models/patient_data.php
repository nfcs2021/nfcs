<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class patient_data extends Model
{
    
    protected $fillable = ['First_Name','Last_Name','Date_of_birth','Contact_Number','Gender','Email_address','Ssn','Address_Line1','Address_Line2','Country','State','City','Zipcode','Insurance_Number','Created_by'];
    protected $table = 'patient_datas';
    use HasFactory;
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
class admin_reg_det extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'First_Name',
        'Last_Name',
        'User_Name',
        'Date_of_birth',
        'Contact_number',
        'Gender',
        'Email',
        'Ssn',
        'Address_Line1',
        'Address_Line2',
        'Country',
        'State',
        'City',
        'Zipcode',
        'PCP_Name',
        'Emp_designation',
        'Emp_id_doc',
        'Emp_id_doc_Name',
        'Emp_id_doc_Type',
        'Emp_id',
        'Id_proof',
        'Id_proof_Name',
        'Id_proof_Type',
        'Immidiate_manager',
        'Profile_image',
        'Profile_image_Name',
        'Profile_image_Type',
        'Password',
        'Created_by',
        'otp'
    ];
    protected $table ='admin_reg_dets';


    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

}

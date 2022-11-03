<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class front_Desk_reg_det extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
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
    protected $table ='front_Desk_reg_det';


    //protected $primaryKey = ['Email','Password','id'];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function roles(){
        return $this->hasOne('App\Models\Roles','user_id');
    }

}

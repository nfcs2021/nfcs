<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class patientEntryRecord extends Model
{
    protected $fillable = ['Patient_id','Patient_report','Physician_report','PCP_Name','Created_by','Visit_time'];
    protected $table = 'patient_entry_records';
    use HasFactory;


    public function Questionary_answers()
    {
        return $this->hasMany('App\Models\Questionary_answers','Record_id');
    }
    
    public function selected_body_parts()
    {
        return $this->hasMany('App\Models\selected_body_parts','Record_id');
    }


}


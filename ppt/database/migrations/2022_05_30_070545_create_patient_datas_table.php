<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patient_datas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('First_Name');
            $table->string('Last_Name');
            $table->date('Date_of_birth');
            $table->string('Contact_Number');
            $table->string('Gender');
            $table->string('Email_address')->unique();
            $table->string('Ssn');
            $table->text('Address_Line1');
            $table->text('Address_Line2');
            $table->string('Country');
            $table->string('State');
            $table->string('City');
            $table->unsignedMediumInteger('Zipcode')->length(20);
            $table->integer('Insurance_Number');
            $table->string('Created_by');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patient_datas');
    }
};

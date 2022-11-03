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
        Schema::create('patient_entry_records', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('Patient_id')->unsigned()->index();
            $table->binary('Patient_report')->nullable();
            $table->binary('Physician_report')->nullable();
            $table->string('PCP_Name')->nullable();
            $table->string('Created_by');
            $table->timestamp('Visit_time')->useCurrent();
            $table->timestamps();
            $table->foreign('Patient_id')
            ->references('id')
            ->on('patient_datas')
            ->onDelete('cascade');
        });
    } 
    

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patient_entry_records');
    }
};

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
        Schema::create('selected_body_parts', function (Blueprint $table) {
            $table->BigIncrements('id');
            $table->bigInteger('Body_parts_id')->unsigned()->index();
            $table->bigInteger('Record_id')->unsigned()->index();
            $table->bigInteger('Patient_id')->unsigned()->index(); 
            $table->timestamps();
            $table->foreign('Record_id')
            ->references('id')
            ->on('patient_entry_records')
            ->onDelete('cascade');
            $table->foreign('Patient_id')
            ->references('id')
            ->on('patient_datas')
            ->onDelete('cascade');
            $table->foreign('Body_parts_id')
            ->references('Body_parts_id')
            ->on('Body_parts')
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
        Schema::dropIfExists('seceted_body_parts');
    }
};

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
        Schema::create('Questionary_answers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('Record_id')->unsigned()->index();
            $table->bigInteger('Patient_id')->unsigned()->index();
            $table->float('Sub_question_id')->unsigned()->index();
            $table->text('Answers')->nullable();
            $table->string('Created_by');
            $table->string('Updated_By');
            $table->foreign('Record_id')
            ->references('id')
            ->on('patient_entry_records')
            ->onDelete('cascade');
            $table->foreign('Patient_id')
            ->references('id')
            ->on('patient_datas')
            ->onDelete('cascade');
            $table->foreign('Sub_question_id')
            ->references('Sub_question_id')
            ->on('Questionary_datas')
            ->onDelete('cascade');
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
        Schema::dropIfExists('questionary_answers');
    }
};

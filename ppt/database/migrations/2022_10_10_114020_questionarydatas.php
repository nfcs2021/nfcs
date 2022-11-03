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
        Schema::create('Questionary_datas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('Question_id')->unsigned()->index();
            $table->string('Questions')->nullable(); 
            $table->float('Sub_question_id')->unsigned()->index();
            $table->string('Sub_questions')->nullable(); 
            $table->string('Created_by');
            $table->string('Updated_By');
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
        Schema::dropIfExists('questionary_datas');
    }
};

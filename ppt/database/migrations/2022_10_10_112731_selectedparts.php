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
        Schema::create('Body_parts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('Body_parts_id')->unsigned()->index();
            $table->string('Part_name')->nullable();
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
        Schema::dropIfExists('selected_parts');
    }
};

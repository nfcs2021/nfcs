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
        Schema::create('front_desk_login_dets', function (Blueprint $table) {
            $table->BigIncrements('id');
            $table->bigInteger('front_desk_id')->unsigned()->index();
            $table->string('User_Name');
            $table->string('PCP_Name');
            $table->string('Password');
            $table->foreign('front_desk_id')
            ->references('id')
            ->on('front_Desk_reg_det')
            ->onDelete('cascade');
            $table->timestamp('Last_login_time')->useCurrent();
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
        Schema::dropIfExists('front_desk_login_dets');
    }
};

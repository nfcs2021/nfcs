<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('front_Desk_reg_det', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('First_Name',255);
            $table->string('Last_Name');
            $table->date('Date_of_birth');
            $table->string('Contact_number');
            $table->string('Gender');
            $table->string('Email');
            $table->string('User_Name');
            $table->string('Password');
            $table->string('Ssn');
            $table->text('Address_Line1');
            $table->text('Address_Line2');
            $table->string('Country');
            $table->string('State');
            $table->string('City');
            $table->string('Zipcode');
            $table->string('PCP_Name');
            $table->string('Emp_designation');
            $table->string('Emp_id_doc_Name')->nullable();
            $table->string('Emp_id_doc_Type')->nullable();
            $table->bigInteger('Emp_id');
            $table->string('Id_proof_Name')->nullable();
            $table->string('Id_proof_Type')->nullable();
            $table->string('Immidiate_manager');
            $table->string('Profile_image_Name')->nullable();
            $table->string('Profile_image_Type')->nullable();
            $table->string('Created_by');
            $table->unique(['Email','Password']);
            $table->string('otp');
            $table->rememberToken();
            $table->timestamps();
        });
        DB::statement("ALTER TABLE front_Desk_reg_det ADD Emp_id_doc  MEDIUMBLOB");
        DB::statement("ALTER TABLE front_Desk_reg_det ADD Id_proof  MEDIUMBLOB");
        DB::statement("ALTER TABLE front_Desk_reg_det ADD Profile_image  MEDIUMBLOB");

        Schema::create('roles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('user_id')->unsigned()->index();
            $table->string('role');
            $table->timestamps();
            $table->foreign('user_id')
            ->references('id')
            ->on('front_Desk_reg_det')
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
        Schema::dropIfExists('front_Desk_reg_det');
    }
};

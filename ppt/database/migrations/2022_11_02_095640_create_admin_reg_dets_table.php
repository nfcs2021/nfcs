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
        Schema::create('admin_reg_dets', function (Blueprint $table) {
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
        DB::statement("ALTER TABLE admin_reg_dets ADD Emp_id_doc  MEDIUMBLOB");
        DB::statement("ALTER TABLE admin_reg_dets ADD Id_proof  MEDIUMBLOB");
        DB::statement("ALTER TABLE admin_reg_dets ADD Profile_image  MEDIUMBLOB");

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admin_reg_dets');
    }
};

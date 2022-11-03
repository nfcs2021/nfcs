<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FrontDeskController;
use App\Http\Controllers\PatientDataController;
use App\Http\Controllers\QuestionaryDataController;
use App\Http\Controllers\SelectedPartsController;
use App\Http\Controllers\PatientEntryRecordController;
use App\Http\Controllers\SelectedBodypartsController;
use App\Http\Controllers\QuestionaryAnswersController;
use App\Http\Controllers\FrontDeskLoginDetController;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\AdminRegDetController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->front_Desk_reg_det();
});
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->admin_reg_dets();
});


Route::middleware('auth:sanctum')->group( function () {

    Route::get('/me', [AuthController::class,'me']);
    Route::put('/register/updateStatus/{id}/{role}', [FrontDeskController::class, 'updateUserStatus']);
    //patient data
    Route::get('patientData','App\Http\Controllers\patientDataController@getPatientData');
    Route::get('patientData/{id}','App\Http\Controllers\patientDataController@getPatientDataById');
    Route::post('patientData','App\Http\Controllers\patientDataController@addPatient');
    Route::put('patientData/{id}','App\Http\Controllers\patientDataController@updatePatientData');
    Route::delete('patientData/{id}','App\Http\Controllers\patientDataController@destroy');
    Route::get('patientDataRcords/{email}','App\Http\Controllers\patientDataController@getPatientDataRcords');

//patient Questionary
Route::get('Questions','App\Http\Controllers\QuestionaryDataController@getQuestions');
Route::get('Questions/{id}',[QuestionaryDataController::class,'getQuestionsById']);
Route::post('Questions',[QuestionaryDataController::class,'addQuestions']);
Route::put('Questions/{id}',[QuestionaryDataController::class,'editQuestions']);
Route::delete('Questions/{id}',[QuestionaryDataController::class,'deleteQuestions']);

//selected parts
Route::get('select',[SelectedPartsController::class,'getSelectedParts']);
Route::get('select/{id}',[SelectedPartsController::class,'getSelectedPartsById']);
Route::post('select','App\Http\Controllers\SelectedPartsController@addParts');
Route::put('select/{id}','App\Http\Controllers\SelectedPartsController@updateSelectedParts');
Route::delete('select/{id}',[SelectedPartsController::class,'deleteSelectedParts']);

Route::get('record',[PatientEntryRecordController::class,'getpatientrecord']);
Route::get('record/{id}',[PatientEntryRecordController::class,'getpatientrecordById']);
Route::post('record',[PatientEntryRecordController::class,'addpatientrecord']);
Route::put('record/{id}',[PatientEntryRecordController::class,'updaterecord']);
Route::delete('record/{id}',[PatientEntryRecordController::class,'deleterecord']);
Route::get('recordPatientId/{id}',[PatientEntryRecordController::class,'getpatientrecordByPatientId']);

Route::get('selectedanswer',[QuestionaryAnswersController::class,'getAnswer']);
Route::post('selectedanswer',[QuestionaryAnswersController::class,'addanswer']);
Route::get('selectedanswer/{id}',[QuestionaryAnswersController::class,'getAnswerById']);
Route::put('selectedanswer/{id}',[QuestionaryAnswersController::class,'updateAnswer']);
Route::delete('selectedanswer/{id}',[QuestionaryAnswersController::class,'deleteAnswer']);


Route::get('answer',[SelectedBodypartsController::class,'getSelectedpart']);
Route::post('answer',[SelectedBodypartsController::class,'addselectedparts']);
Route::get('answer/{id}',[SelectedBodypartsController::class,'getSelectedpartById']);
Route::put('answer/{id}',[SelectedBodypartsController::class,'editselectedpart']);
Route::delete('answer/{id}',[SelectedBodypartsController::class,'deleteselectedpart']);

//api for front_desk_reg_det
Route::get('/register', [FrontDeskController::class,'getregistation']);
Route::get('/register/{id}', [FrontDeskController::class,'getregistationById']);
Route::get('/registerByUser/{User_Name}',[FrontDeskController::class,'getregistationByUser']);
Route::put('/register/{id}', [FrontDeskController::class,'updateregistration']);
Route::put('/updatePassword', [FrontDeskController::class,'updatePassword']);
Route::get('/Password/{User_Name}', [FrontDeskController::class,'getpassword']);

//login details
Route::get('/logindet/{email}', [FrontDeskLoginDetController::class,'getlogin']);
Route::get('/logindet/{id}', [FrontDeskLoginDetController::class,'getloginById']);
Route::post('/logindet', [FrontDeskLoginDetController::class,'addlogin']);
Route::put('/logindet', [FrontDeskLoginDetController::class,'updatelogin']);
Route::delete('/logindet/{id}', [FrontDeskLoginDetController::class,'destroy']);

//upload and download the front_desk_reg_det documents
Route::get('/EmpId/download/{id}', [App\Http\Controllers\FrontDeskController::class, 'downloadEmpId']);
Route::get('/Idproof/download/{id}', [App\Http\Controllers\FrontDeskController::class, 'downloadIdProof']);
Route::get('/Images/download/{id}', [App\Http\Controllers\FrontDeskController::class, 'downloadProfileImage']);


});

//authcontroller for front_desk registration details
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/getmail', [FrontDeskController::class,'getmail']);
Route::post('/request_otp', [AuthController::class, 'requestOtp']);
Route::post('/verify_otp', [AuthController::class, 'verifyOtp']);


//contact_us form
Route::post('/addcontact', [ContactUsController::class, 'addcontact']);
Route::post('/getmail', [ContactUsController::class, 'getmail']);
Route::get('/getcontact', [ContactUsController::class, 'getcontact']);
Route::get('/getcontact/{id}', [ContactUsController::class,'getcontactById']);
Route::put('/updatePassword', [FrontDeskController::class,'updatePassword']);

//Route::post('/documents/upload', [App\Http\Controllers\FileController::class, 'store']);


//admin_registration
//Route::post('/adminlogin', [AdminRegDetController::class, 'login']);
Route::post('/adminregister', [AdminRegDetController::class, 'register']);
Route::get('/admin/EmpId/download/{id}', [AdminRegDetController::class, 'downloadEmpId']);
Route::get('/admin/Idproof/download/{id}', [App\Http\Controllers\AdminRegDetController::class, 'downloadIdProof']);
Route::get('/admin/Images/download/{id}', [App\Http\Controllers\AdminRegDetController::class, 'downloadProfileImage']);
Route::post('/admingetmail', [AdminRegDetController::class,'getmail']);
Route::get('/adminregister/{id}', [AdminRegDetController::class,'deleteregistration']);
Route::get('/adminregister/{id}', [AdminRegDetController::class,'getregistationById']);
Route::get('/getadminregister', [AdminRegDetController::class,'getregistation']);
Route::get('/adminregisterByUser/{User_Name}', [AdminRegDetController::class,'getregistationByUser']);
Route::put('/adminregister/{id}', [AdminRegDetController::class,'updateregistration']);
Route::put('/adminupdatePassword', [AdminRegDetController::class,'updatePassword']);
Route::get('/adminPassword/{User_Name}', [AdminRegDetController::class,'getpassword']);
Route::post('/requestotp', [AdminRegDetController::class, 'requestOtp']);
Route::post('/verifyotp', [AdminRegDetController::class, 'verifyOtp']);


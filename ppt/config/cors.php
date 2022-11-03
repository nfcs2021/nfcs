<?php

return [
    

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    'paths' => ['api/patientData','api/request_otp','api/verify_otp', 'api/patientData/*','api/updatePassword',
    'api/registerBymail/*', 'api/patientDataRcords/*', 'api/me', 'api/register/updateStatus/*',
     'api/patientDataByName/*', 'api/Questions', 'api/Questions/*', 'api/select', 'api/select/*',
     'api/register', 'api/login','sanctum/csrf-cookie', 'api/answer', 'api/answer/*', 'api/selectedanswer', 'api/selectedanswer/*', 
     'api/register', 'api/register/*',
     'api/register','api/logindet','api/logindet/*','api/register/*','api/record','api/record/*','api/recordPatientId','api/EmpId/download/*',
     'api/Idproof/download/*','api/Images/download/*','api/adminregister','api/admin/EmpId/download/*','api/admin/Idproof/download/*',
    'api/admin/Images/download/*','api/admingetmail','api/adminregister/*','api/getadminregister','api/adminregisterByUser/*',
    'api/adminupdatePassword','api/adminPassword/*','api/requestotp','api/verifyotp'],

    'allowed_methods' => ['GET','DELETE','POST','PUT','PATCH'],

    'allowed_origins' => ['http://localhost:4200', 'http://localhost:4200/*'],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true,
];

<?php

namespace App\Http\Controllers;
use App\ContactMail\SendMail;
use App\Models\front_Desk_reg_det;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;
use App\Models\Roles;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use App\Mail\WelcomeMail;
use Illuminate\Support\Facades\Http;

class AuthController extends Controller
{
    public function register(Request $request)
    {

   
        $validatedData = $request->validate([
            'First_Name' => 'required|string|max:255',
            'Last_Name' => 'required|string|max:255',
            'Date_of_birth' => 'required|date|max:255',
            'Contact_number' => 'required|string|max:255',
            'Gender' => 'required|string|max:255',
            'Email' => 'required|string|Email|max:255|',
            'User_Name' => 'required|string|max:255',
            'Ssn' => 'required|string|max:255',
            'Address_Line1' => 'required|string|max:255',
            'Address_Line2' => 'required|string|max:255',
            'Country' => 'required|string|max:255',
            'State' => 'required|string|max:255',
            'City' => 'required|string|max:255',
            'Zipcode' => 'required',
            'PCP_Name' => 'required|string|max:255',
            'Emp_designation' => 'required|string|max:255',
            'Emp_id_doc' => 'required',
            'Emp_id' => 'required',
            'Id_proof' => 'required',
            'Immidiate_manager' => 'required|string|max:255',
            'Profile_image' => 'required',
            'Password' => 'string|min:8',
            'Created_by' => 'required|string|max:250',
            'otp' => 'required'
]);

$empdocpath = $request->file('Emp_id_doc')->getRealPath();
$empdocext = $request->Emp_id_doc->extension();
$empdoc = file_get_contents($empdocpath);
$empdocbase64 = base64_encode($empdoc);
$Emp_id_doc_Type = $request->file('Emp_id_doc')->getClientMimeType();

$idproofpath = $request->file('Id_proof')->getRealPath();
$idproofext = $request->Id_proof->extension();
$idproofdoc = file_get_contents($idproofpath);
$idproofbase64 = base64_encode($idproofdoc);
$Id_proof_Type = $request->file('Id_proof')->getClientMimeType();


$profilepath = $request->file('Profile_image')->getRealPath();
$profileext = $request->Profile_image->extension();
$profiledoc = file_get_contents($profilepath);
$profilebase64 = base64_encode($profiledoc);
$Profile_image_Type = $request->file('Profile_image')->getClientMimeType();



$password=Str::random(10);
$user = front_Desk_reg_det::create([
       'First_Name' => $validatedData['First_Name'],
            'Last_Name' => $validatedData['Last_Name'],
            'Date_of_birth' => $validatedData['Date_of_birth'],
            'Contact_number' => $validatedData['Contact_number'],
            'Gender' => $validatedData['Gender'],
            'Email' => $validatedData['Email'],
            'User_Name' => $validatedData['User_Name'],
            'Ssn' =>$validatedData['Ssn'],
            'Address_Line1' => $validatedData['Address_Line1'],
            'Address_Line2' => $validatedData['Address_Line2'],
            'Country' => $validatedData['Country'],
            'State' => $validatedData['State'],
            'City' => $validatedData['City'],
            'Zipcode' => $validatedData['Zipcode'],
            'PCP_Name' => $validatedData['PCP_Name'],
            'Emp_designation' => $validatedData['Emp_designation'],
            'Emp_id_doc_Name' => 'employeedoc'.'.'.$empdocext,
            'Emp_id_doc' => $empdocbase64, 
            'Emp_id_doc_Type' => $Emp_id_doc_Type,
            'Emp_id' => $validatedData['Emp_id'],
            'Id_proof_Name' => 'idproof'.'.'.$idproofext,
            'Id_proof' => $idproofbase64,
            'Id_proof_Type' => $Id_proof_Type,
            'Immidiate_manager' => $validatedData['Immidiate_manager'],
            'Profile_image_Name' => 'profile'.'.'.$profileext,
            'Profile_image' => $profilebase64,
            'Profile_image_Type' => $Profile_image_Type,
            'Password' => Hash::make($password),
            'Created_by' => $validatedData['Created_by'],
            'otp' => $validatedData['otp'],
]);

           $email = $request->input('Email');
        Mail::to($email)->send(new WelcomeMail($user,$password));

           $role = Roles::create([
            'user_id' => $user['id'],
            'role' =>'Front_desk',
       
        ]);
        $token = $user->createToken('auth_token')->plainTextToken;
    
    return response()->json([
                   'data'=> $user,
                  'access_token' => $token,
                    'token_type' => 'Bearer',
    ]);
    }
  
  
    public function login(Request $request)
  {
      $inputUser_Name = $request->only('User_Name');
      $inputPassword = $request->input('Password');
      $inputPCP_Name = $request->only('PCP_Name');
       
       $registerData = front_Desk_reg_det::where('User_Name',$request->User_Name)->orderBy('created_at', 'DESC')->first();

     
            if($registerData->only('User_Name')==$inputUser_Name && Hash::check($inputPassword, $registerData->Password) && $registerData->only('PCP_Name')==$inputPCP_Name){
                $user = front_Desk_reg_det::where('User_Name', $request['User_Name'])->with('roles')->firstOrFail();

                $token = $user->createToken('auth_token')->plainTextToken;
                
                return response()->json([
                           'data'=> $user,
                           'access_token' => $token,
                           'token_type' => 'Bearer',
                ]);
                }       
      
      return response()->json([
        'message' => 'Invalid login details'
                   ], 401);

}
public function me(Request $request)
{
    return $request->front_Desk_reg_det();
}



public function requestOtp(Request $request)
 {
        $otp = rand(1000,9999);
        Log::info("otp = ".$otp);
        $registerData = front_Desk_reg_det::where('User_Name',$request->User_Name)->orderBy('created_at', 'DESC')->first();
        $user = front_Desk_reg_det::where('Email','=',$registerData->Email)->update(['otp' => $otp]);
        Session::put('otp', $otp);
        //dd($user);
        if($user){

        $mail_details = [
            'subject' => 'Testing Application OTP',
            'body' => 'Your OTP is : '. $otp
        ];
       
         \Mail::to($registerData->Email)->send(new SendMail($mail_details));
         $response = Http::get('http://control.msg91.com/api/v5/otp?template_id=635faca4d6fc0511a2436d93&mobile=91'.$registerData->Contact_number.'&authkey=384204A5gL3pOvDW635b6cc5P1&otp='.$otp
         );
       
         return response(["status" => 200, "message" => "OTP sent successfully"]);
        }
        else{
            return response(["status" => 401, 'message' => 'Invalid']);
        }
    }


    public function verifyOtp(Request $request){

        $registerData = front_Desk_reg_det::where('User_Name',$request->User_Name)->orderBy('created_at', 'DESC')->first();
   
         $user  = front_Desk_reg_det::where([['Email','=',$registerData->Email],['otp','=',$registerData->otp]])->first();
        if($user){
            auth()->login($user, true);
            front_Desk_reg_det::where('Email','=',$registerData->Email)->update(['otp' => "null"]);
            //  $accessToken = auth()->front_Desk_reg_det()->createToken('authToken')->accessToken;

            return response(["status" => 200, "message" => "Success"]);
        }
        else{
            return response(["status" => 401, 'message' => 'Invalid']);
        }
    }

}





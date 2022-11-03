<?php

namespace App\Http\Controllers;
use App\ContactMail\SendMail;
use App\Models\admin_reg_det;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use App\Mail\WelcomeMail;
use Illuminate\Support\Facades\Http;

class AdminRegDetController extends Controller
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
$user = admin_reg_det::create([
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
       
       $registerData = admin_reg_det::where('User_Name',$request->User_Name)->orderBy('created_at', 'DESC')->first();

     
            if($registerData->only('User_Name')==$inputUser_Name && Hash::check($inputPassword, $registerData->Password) && $registerData->only('PCP_Name')==$inputPCP_Name){
                $user = admin_reg_det::where('User_Name', $request['User_Name'])->firstOrFail();

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
             return $request->admin_reg_det();
        }

 public function requestOtp(Request $request)
        {
            $otp = rand(1000,9999);
            Log::info("otp = ".$otp);
            $registerData = admin_reg_det::where('User_Name',$request->User_Name)->orderBy('created_at', 'DESC')->first();
            $user = admin_reg_det::where('Email','=',$registerData->Email)->update(['otp' => $otp]);
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

        $registerData = admin_reg_det::where('User_Name',$request->User_Name)->orderBy('created_at', 'DESC')->first();
   
       
        $user  = admin_reg_det::where([['Email','=',$registerData->Email],['otp','=',$registerData->otp]])->first();
        if($user){
            auth()->login($user, true);
            admin_reg_det::where('Email','=',$registerData->Email)->update(['otp' => "null"]);
            //  $accessToken = auth()->front_Desk_reg_det()->createToken('authToken')->accessToken;

            return response(["status" => 200, "message" => "Success"]);
        }
        else{
            return response(["status" => 401, 'message' => 'Invalid']);
        }
    }

       

    public function downloadEmpId($id)
    {
        $admin = admin_reg_det::find($id);

        $file_contents = base64_decode($admin->Emp_id_doc);

        return response($file_contents)
                         ->header('Cache-Control', 'no-cache private')
                         ->header('Content-Description', 'File Transfer')
                         ->header('Content-Type', $admin->mime)
                         ->header('Content-length', strlen($file_contents))
                         ->header('Content-Disposition', 'attachment; filename=' .  $admin->Emp_id_doc_Name)
                         ->header('Content-Transfer-Encoding', 'binary');
    }
    public function downloadIdProof($id)
    {
        $admin = admin_reg_det::find($id);

        $file_contents = base64_decode($admin->Id_proof);

        return response($file_contents)
                         ->header('Cache-Control', 'no-cache private')
                         ->header('Content-Description', 'File Transfer')
                         ->header('Content-Type', $admin->mime)
                         ->header('Content-length', strlen($file_contents))
                         ->header('Content-Disposition', 'attachment; filename=' . $admin->Id_proof_Name)
                         ->header('Content-Transfer-Encoding', 'binary');
    }
    public function downloadProfileImage($id)
    {
        $admin = admin_reg_det::find($id);

        $file_contents = base64_decode($admin->Profile_image);

        return response($file_contents)
                         ->header('Cache-Control', 'no-cache private')
                         ->header('Content-Description', 'File Transfer')
                         ->header('Content-Type', $admin->mime)
                         ->header('Content-length', strlen($file_contents))
                         ->header('Content-Disposition', 'attachment; filename=' .  $admin->Profile_image_Name)
                         ->header('Content-Transfer-Encoding', 'binary');
    }

    public function getmail(Request $request)
    {

      //Mail::to($request->email)->send(new ContactMail($request));

       Mail::to('thejashwinir.18.amca@acharya.ac.in')->send(new ContactMail($request));
     }
   

     public function deleteregistration($id)
     {
         $register = admin_reg_det::find($id);
         if(is_null($register))
         {
             return 'patient not found';
         }
         $register->delete();
         return  $register;
     }     

     public function getregistationById($id)
     {
        $register = admin_reg_det::find($id);  
        if(is_null($register))
        {
          return 'registration record not found';
        } 
        return $register; 
     }
 
     public function getregistation()
     {
         $request=admin_reg_det::with('Roles')->get();
         return $request;
      }
 
      public function getregistationByUser($userName)
      {
         $register = admin_reg_det::where('User_Name',$userName)->get();  
         if(is_null($register))
         {
           return 'registration record not found';
         } 
         return $register; 
      }

      public function updateregistration(Request $request,$id)
    {
        $register = admin_reg_det::find($id);
       if(is_null($register))
       {
           return 'patient not found';
       }
       $register->update($request->all());
       return  $register;
    }
  
    public function updatePassword(Request $request)
    {
        $adminData=admin_reg_det::where('User_Name',$request->User_Name)->get();

        if(count($adminData)==1)
        {
            if($request->User_Name==$adminData[0]->User_Name && Hash::check($request->oldPassword, $adminData[0]->Password))
            {
                $project=admin_reg_det::where('User_Name',$request->User_Name)->orderBy('created_at', 'ASC')->first();;
                $project->Password=$request->Password;
                $user = admin_reg_det::create([
                    'First_Name' => $project['First_Name'],
                         'Last_Name' => $project['Last_Name'],
                         'User_Name' => $project['User_Name'], 
                         'Date_of_birth' => $project['Date_of_birth'],
                         'Contact_number' => $project['Contact_number'],
                         'Gender' => $project['Gender'],
                         'Email' => $project['Email'],
                         'Ssn' =>$project['Ssn'],
                         'Address_Line1' => $project['Address_Line1'],
                         'Address_Line2' => $project['Address_Line2'],
                         'Country' => $project['Country'],
                         'State' => $project['State'],
                         'City' => $project['City'],
                         'Zipcode' => $project['Zipcode'],
                         'PCP_Name' => $project['PCP_Name'],
                         'Emp_designation' => $project['Emp_designation'],
                         'Emp_id_doc' => $project['Emp_id_doc'],
                         'Emp_id' => $project['Emp_id'],
                         'Id_proof' => $project['Id_proof'],
                         'Immidiate_manager' => $project['Immidiate_manager'],
                         'Profile_image' => $project['Profile_image'],
                         'Password' => Hash::make($project['Password']),
                         'Created_by' => $project['Created_by'],
                         'otp' => $project['otp'],
             ]); 
             $role = Roles::create([
                'user_id' => $user['id'],
                'role' =>'Front_desk',
           
            ]);
             return $user;
            }
            else {
                return "Invalid Credentials";
            }
        }
        else{

       $project=admin_reg_det::where('User_Name',$request->User_Name)->orderBy('created_at', 'ASC')->first();
       $project->Password=$request->Password;

       if(count($adminData)<3){

        $user = admin_reg_det::create([
            'First_Name' => $project['First_Name'],
                 'Last_Name' => $project['Last_Name'],
                 'User_Name' => $project['User_Name'], 
                 'Date_of_birth' => $project['Date_of_birth'],
                 'Contact_number' => $project['Contact_number'],
                 'Gender' => $project['Gender'],
                 'Email' => $project['Email'],
                 'Ssn' =>$project['Ssn'],
                 'Address_Line1' => $project['Address_Line1'],
                 'Address_Line2' => $project['Address_Line2'],
                 'Country' => $project['Country'],
                 'State' => $project['State'],
                 'City' => $project['City'],
                 'Zipcode' => $project['Zipcode'],
                 'PCP_Name' => $project['PCP_Name'],
                 'Emp_designation' => $project['Emp_designation'],
                 'Emp_id_doc' => $project['Emp_id_doc'],
                 'Emp_id' => $project['Emp_id'],
                 'Id_proof' => $project['Id_proof'],
                 'Immidiate_manager' => $project['Immidiate_manager'],
                 'Profile_image' => $project['Profile_image'],
                 'Password' => Hash::make($project['Password']),
                 'Created_by' => $project['Created_by'],
                 'otp' => $project['otp'],
     ]);
     $role = Roles::create([
        'user_id' => $user['id'],
        'role' =>'Front_desk',
   
    ]);
     return $user;
       }
       else{
        $previousData = admin_reg_det::orderBy('created_at', 'ASC')->first();
        admin_reg_det::where('id',$previousData->id)->delete();
        $user = admin_reg_det::create([
            'First_Name' => $project['First_Name'],
                 'Last_Name' => $project['Last_Name'],
                 'User_Name' => $project['User_Name'], 
                 'Date_of_birth' => $project['Date_of_birth'],
                 'Contact_number' => $project['Contact_number'],
                 'Gender' => $project['Gender'],
                 'Email' => $project['Email'],
                 'Ssn' =>$project['Ssn'],
                 'Address_Line1' => $project['Address_Line1'],
                 'Address_Line2' => $project['Address_Line2'],
                 'Country' => $project['Country'],
                 'State' => $project['State'],
                 'City' => $project['City'],
                 'Zipcode' => $project['Zipcode'],
                 'PCP_Name' => $project['PCP_Name'],
                 'Emp_designation' => $project['Emp_designation'],
                 'Emp_id_doc' => $project['Emp_id_doc'],
                 'Emp_id' => $project['Emp_id'],
                 'Id_proof' => $project['Id_proof'],
                 'Immidiate_manager' => $project['Immidiate_manager'],
                 'Profile_image' => $project['Profile_image'],
                 'Password' => Hash::make($project['Password']),
                 'Created_by' => $project['Created_by'],
                 'otp' => $project['otp'],
     ]);
     return $user;
       }
    }
       return $user;
        //$password = front_Desk_reg_det::orderBy('User_Name', 'ASC')->first();    
    }
    public function getpassword($User_Name)
    {

      //return front_desk_login_det::all();
      return response()->json(front_Desk_reg_det::orderBy('created_at', 'DESC')->where('User_Name',$User_Name)->first());
    }

}

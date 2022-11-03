<?php

namespace App\Http\Controllers;
use App\ContactMail\ContactMail;
use App\Models\Roles;
use Illuminate\Support\Facades\Mail;
use App\Models\front_Desk_reg_det;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
class FrontDeskController extends Controller
{

    
    public function getregistation()
    {

        $request=front_Desk_reg_det::with('Roles')->get();
        return $request;
     }

    public function getregistationById($id)
    {
       $register = front_Desk_reg_det::find($id);  
       if(is_null($register))
       {
         return 'registration record not found';
       } 
       return $register; 
    }

    public function getregistationByUser($userName)
    {
       $register = front_Desk_reg_det::where('User_Name',$userName)->get();  
       if(is_null($register))
       {
         return 'registration record not found';
       } 
       return $register; 
    }


    public function updateregistration(Request $request,$id)
    {
        $register = front_Desk_reg_det::find($id);
       if(is_null($register))
       {
           return 'patient not found';
       }
       $register->update($request->all());
       return  $register;
    }
    
    public function updatePassword(Request $request)
    {
        $frontDeskData=front_Desk_reg_det::where('User_Name',$request->User_Name)->get();

        if(count($frontDeskData)==1)
        {
            if($request->User_Name==$frontDeskData[0]->User_Name && Hash::check($request->oldPassword, $frontDeskData[0]->Password))
            {
                $project=front_Desk_reg_det::where('User_Name',$request->User_Name)->orderBy('created_at', 'ASC')->first();;
                $project->Password=$request->Password;
                $user = front_Desk_reg_det::create([
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

       $project=front_Desk_reg_det::where('User_Name',$request->User_Name)->orderBy('created_at', 'ASC')->first();
       $project->Password=$request->Password;

       if(count($frontDeskData)<3){

        $user = front_Desk_reg_det::create([
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
        $previousData = front_Desk_reg_det::orderBy('created_at', 'ASC')->first();
        front_Desk_reg_det::where('id',$previousData->id)->delete();
        $user = front_Desk_reg_det::create([
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
    }
       return $user;
        //$password = front_Desk_reg_det::orderBy('User_Name', 'ASC')->first();    
    }

    public function getpassword($User_Name)
    {

      //return front_desk_login_det::all();
      return response()->json(front_Desk_reg_det::orderBy('created_at', 'DESC')->where('User_Name',$User_Name)->first());
    }


    public function deleteregistration($id)
    {
        $register = front_Desk_reg_det::find($id);
        if(is_null($register))
        {
            return 'patient not found';
        }
        $register->delete();
        return  $register;
    }     

 public function updateUserStatus($id,$role)
 {
     $roleData = Roles::where('user_id',$id)->get();
     foreach ($roleData as $data)
     $roleData=$data;
     if(is_null($roleData))
     {
         return 'user not found';
     }
else{
        if($roleData['role']=='front_desk')
        {
            $updatedRole = Roles::where('user_id', $id)->update(['role' => $role]);
            return $updatedRole;
        }
        else{
            $createRole = Roles::create([
                'user_id' => $id,
                'role' => $role,
            ]);
            return $createRole;
         }
        }
        
     }

     public function getmail(Request $request)
      {

        //Mail::to($request->email)->send(new ContactMail($request));

         Mail::to('thejashwinir.18.amca@acharya.ac.in')->send(new ContactMail($request));
       }
     
    

       public function downloadEmpId($id)
       {
           $frontdesk = front_Desk_reg_det::find($id);
   
           $file_contents = base64_decode($frontdesk->Emp_id_doc);
   
           return response($file_contents)
                            ->header('Cache-Control', 'no-cache private')
                            ->header('Content-Description', 'File Transfer')
                            ->header('Content-Type', $frontdesk->mime)
                            ->header('Content-length', strlen($file_contents))
                            ->header('Content-Disposition', 'attachment; filename=' .  $frontdesk->Emp_id_doc_Name)
                            ->header('Content-Transfer-Encoding', 'binary');
       }
       public function downloadIdProof($id)
       {
           $frontdesk = front_Desk_reg_det::find($id);
   
           $file_contents = base64_decode($frontdesk->Id_proof);
   
           return response($file_contents)
                            ->header('Cache-Control', 'no-cache private')
                            ->header('Content-Description', 'File Transfer')
                            ->header('Content-Type', $frontdesk->mime)
                            ->header('Content-length', strlen($file_contents))
                            ->header('Content-Disposition', 'attachment; filename=' .  $frontdesk->Id_proof_Name)
                            ->header('Content-Transfer-Encoding', 'binary');
       }
       public function downloadProfileImage($id)
       {
           $frontdesk = front_Desk_reg_det::find($id);
   
           $file_contents = base64_decode($frontdesk->Profile_image);
   
           return response($file_contents)
                            ->header('Cache-Control', 'no-cache private')
                            ->header('Content-Description', 'File Transfer')
                            ->header('Content-Type', $frontdesk->mime)
                            ->header('Content-length', strlen($file_contents))
                            ->header('Content-Disposition', 'attachment; filename=' .  $frontdesk->Profile_image_Name)
                            ->header('Content-Transfer-Encoding', 'binary');
       }


 }






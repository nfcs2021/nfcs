<?php



namespace App\ContactMail;



use Illuminate\Bus\Queueable;

use Illuminate\Mail\Mailable;

use Illuminate\Queue\SerializesModels;

use Illuminate\Contracts\Queue\ShouldQueue;



class ContactMail extends Mailable

{
    use Queueable, SerializesModels;
    public $user;
    public function __construct($request)
    {
     $this->user=$request;
    }

    public function build(){

        return $this->view('contactMail.contactMail');
    }

}
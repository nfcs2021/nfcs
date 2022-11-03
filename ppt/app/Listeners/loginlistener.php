<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;


class loginlistener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(loginevent $event)
    {
        $Email = $event->Email;
        $PCP_Name = $event->PCP_Name;
        $Password = $event->Password;
        $time->Last_login_time = Carbon::now()->toDateTimeString();
        DB::table(table: 'front_desk_login_dets')->insert([
            'Email' => $Email,
            'PCP_Name' => $PCP_Name,
            'Password' => $Password,
            'Last_login_time' => $time,
            'created_at' => $time,
            'updated_at' => $time
        ]);
    }
}


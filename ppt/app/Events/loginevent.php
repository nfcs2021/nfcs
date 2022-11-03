<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class loginevent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $Email;
    public $PCP_Name;
    public $Pasword;
    public $Last_login_time;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($Email,$PCP_Name,$Pasword,$Last_login_time)
    {
        $this->Email = $Email;
        $this->PCP_Name = $PCP_Name;
        $this->PCP_Name = $Pasword;
        $this->PCP_Name = $Last_login_time;
    }
    
    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}

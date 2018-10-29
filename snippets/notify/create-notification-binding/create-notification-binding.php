<?php
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$notification = $twilio->notify->v1->services("ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                                   ->notifications
                                   ->create(array(
                                                "body" => "Hello Bob",
                                                "identity" => "00000001"
                                            )
                                   );

print($notification->sid);

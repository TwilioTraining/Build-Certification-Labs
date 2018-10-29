<?php
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$notification = $twilio->notify->v1->services("ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                                   ->notifications
                                   ->create(array(
                                                "body" => "Knok-Knok! This is your first Notify SMS",
                                                "toBinding" => array(
                                                    "binding_type" => "sms",
                                                    "address" => "+1651000000000"
                                                ),
                                                "identity" => array("identity")
                                            )
                                   );

print($notification->sid);
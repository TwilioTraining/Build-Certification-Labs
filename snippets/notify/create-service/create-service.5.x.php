<?php
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$service = $twilio->notify->v1->services
                              ->create(array(
                                           "messagingServiceSid" => "MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                                           "friendlyName" => "My Notify Service"
                                       )
                              );

print($service->sid);
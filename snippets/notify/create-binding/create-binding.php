<?php
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$binding = $twilio->notify->v1->services("ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
                              ->bindings
                              ->create("00000001", "sms", "+1651000000000");

print($binding->sid);
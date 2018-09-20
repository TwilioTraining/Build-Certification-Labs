<?php
require_once '/path/to/vendor/autoload.php'; // Loads the library
use Twilio\Rest\Client;
// Your Account Sid and Auth Token from twilio.com/user/account
$response = new TwiML();
$sid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token = "your_auth_token";
$client = new Client($sid, $token);
$numbers = array("+1234567910", "+1234567911", "+1234567912");
foreach ($numbers as $number)
{
    $call = $client->calls->create(
        $number, 
        "+14158675310",
        array("url" => "http://yourdomain.com/conference")
    );
}
echo $response;

<?php

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$numbers = array("+1234567910", "+1234567911", "+1234567912");

foreach ($numbers as $number)
{
    $call = $twilio->calls
        ->create($number,
            "+15017122661", // Your Twilio phone number.
            array("url" => "http://demo.twilio.com/docs/voice.xml") // Your TwiML Bin URL here.
    );

    print($call->sid);
}

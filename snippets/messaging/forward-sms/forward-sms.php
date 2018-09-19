<?php
require 'vendor/autoload.php';
use Twilio\Twiml;
use Twilio\Rest\Client;
// Your Account Sid and Auth Token from twilio.com/console
$account_sid = getenv("TWILIO_ACME_ACCOUNT_SID");
$auth_token = getenv('TWILIO_ACME_AUTH_TOKEN');
$client = new Client($account_sid, $auth_token);
$to =  getenv('CELLPHONE_NUMBER');
$response = new TwiML();
$message = $response->message()

$message->body($_REQUEST['Body']);
$message->to($to);

echo $response;
?>

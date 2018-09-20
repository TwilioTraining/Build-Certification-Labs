<?php
require_once './vendor/autoload.php';
use Twilio\TwiML;

$response = new TwiML();
$dial = $response->dial();
$dial->conference('TrainingConference');

echo $response;

<?php
header('Content-type: text/xml');

require 'vendor/autoload.php';

use Twilio\Rest\Client;
use Twilio\Twiml;

$response = new Twiml();
$gather = $response->gather([numDigits=>'1', action=>'/enqueue_call']);
$gather->say('Please select from the following departments');
$gather->say('For sales press one, for support press two, for marketing press three');

echo $response;
?>

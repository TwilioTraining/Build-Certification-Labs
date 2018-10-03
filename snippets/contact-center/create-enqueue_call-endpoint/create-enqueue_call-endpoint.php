<?php
header('Content-type: application/xml');

require 'vendor/autoload.php';
use Twilio\Twiml;

$department = [
1 => "sales",
2 => "support",
3 => "marketing"
];

$workflow_array = [
1 => getenv("TWILIO_ACME_SALES_WORKFLOW_SID"),
2 => getenv("TWILIO_ACME_SUPPORT_WORKFLOW_SID"),
3 => getenv("TWILIO_ACME_MARKETING_WORKFLOW_SID")
];

$response = new  Twiml();

$choice = $_REQUEST['Digits'];

$enqueue = $response->enqueue([workflowSid=>$workflow_array[$choice]]);
	$enqueue->task('{"selected_product":"'.$department[$choice].'"}');

echo $response;

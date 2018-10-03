<?php
// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
$sid    = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
$token  = "your_auth_token";
$twilio = new Client($sid, $token);

$workflow = $twilio->taskrouter->v1
 ->workspaces("WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
 ->workflows
 ->create("Sales, Marketing, Support Workflow", // friendlyName
   array(
     "task_routing" => array(
     "filters" => array(
       array(
         "expression" => "seleted_product=='sales'",
         "targets" => array(
           array(
             "queue" => $sales_taskqueue_sid
           )
         )
       ),
       array(
         "expression" => "selected_product=='marketing'",
         "targets" => array(
           array(
             "queue" => $marketing_taskqueue_sid
           )
         )
       ),
       array(
         "expression" => "selected_product=='support'",
         "targets" => array(
           array(
             "queue" => $support_taskqueue_sid
           )
         )
       ),
       array(
         "expression" => "selected_product=='manager'",
         "targets" => array(
           array(
             "queue" => $manager_taskqueue_sid
           )
         )
       )
     ),
     "default_filter" => array(
         "queue" => "WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
     )
   )
 ), // configuration
 array(
     "assignmentCallbackUrl" => "",
     "fallbackAssignmentCallbackUrl" => "",
     "taskReservationTimeout" => 30
 )
);

print($workflow->sid);

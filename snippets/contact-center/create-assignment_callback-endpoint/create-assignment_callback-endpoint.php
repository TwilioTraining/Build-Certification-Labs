<?php

$assignment_instruction = [
  'instruction' => 'dequeue',
  'post_work_activity_sid' => '{WA0123401234...}',
  'from' => '+15556667777' // a verified phone number from your twilio account 
];

header('Content-Type: application/json');
echo json_encode($assignment_instruction);

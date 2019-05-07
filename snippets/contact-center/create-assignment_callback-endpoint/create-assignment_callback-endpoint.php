<?php

$assignment_instruction = [
  'instruction' => 'dequeue',
  'from' => '+15556667777' // a verified phone number from your twilio account 
];

header('Content-Type: application/json');
echo json_encode($assignment_instruction);

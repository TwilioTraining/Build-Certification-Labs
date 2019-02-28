const express = require('express');
const http_port = 5000;

const app = express();

var twilio = require('twilio');

const accountSid = process.env.TWILIO_ACME_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACME_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

app.listen(http_port, () =>
  console.log(`Example app listening on port ${http_port}!`)
);

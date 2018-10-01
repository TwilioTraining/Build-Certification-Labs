const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/sms', (req, res) => {

  const MessagingResponse = require('twilio').twiml.MessagingResponse;
  const response = new MessagingResponse();
  const message = response.message({to:process.env.TWILIO_ACME_CALLERID});
  
  message.body(`From: ${req.body.From} Message: ${req.body.Body}`);

  res.send(response.toString());
});

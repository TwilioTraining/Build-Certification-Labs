// npm requirements - express, body-parser, twilio

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/sms', (req, res) => {

  const MessagingResponse = require('twilio').twiml.MessagingResponse;
  const response = new MessagingResponse();
  const message = response.message({to:'Your Phone number string here'});
  
  message.body(`From: ${req.body.From} Message: ${req.body.Body}`);

  res.send(response.toString());
});

/*
TwiML Oubput Example

<Response>
  <Message to="+15559997878">
    <Body>From: +15554441212 Message: Forwarded message</Body>
  </Message>
</Response>

*/

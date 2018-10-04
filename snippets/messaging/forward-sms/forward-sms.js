// npm requirements - express, body-parser, twilio

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/forward', (req, res) => {

  const MessagingResponse = require('twilio').twiml.MessagingResponse;
  const response = new MessagingResponse();
  const message = response.message({to:'Your Phone number string here'});
  
  message.body(`From: ${req.body.From} Message: ${req.body.Body}`);

  res.send(response.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});
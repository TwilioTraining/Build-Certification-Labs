const express = require("express");
const app = express();


app.use('/conference', function(req, res) {
  const VoiceResponse = require('twilio').twiml.VoiceResponse;
  const response = new VoiceResponse();
  const dial = response.dial();
  dial.conference('Room 1234');
  res.send(response.toString());
})

// Make sure the port is the port ngrok is using.
http.createServer(app).listen(5000, () => {
  console.log("Express server listening on port 5000");
});

app.use('/conference', function(req, res) {
  const VoiceResponse = require('twilio').twiml.VoiceResponse;
  const response = new VoiceResponse();
  const dial = response.dial();
  dial.conference('Room 1234');
  res.send(response.toString());
}

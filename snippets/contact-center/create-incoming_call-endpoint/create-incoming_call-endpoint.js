app.use('/incoming_call', function(req, res) {
  const VoiceResponse = require('twilio').twiml.VoiceResponse;
  const response = new VoiceResponse();
  const gather = response.gather({
    input: 'speech dtmf',
    timeout: 3,
    numDigits: 1,
    action:'/enqueue_call'
  });
  gather.say('Please select from the following departments');
  gather.say('For sales press one, for support press two, for marketing press three');
  res.send(response.toString());
});

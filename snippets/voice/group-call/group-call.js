// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console

const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';

const client = require('twilio')(accountSid, authToken);

var numbers = ["+1234567910", "+1234567911", "+1234567912"];

numbers.forEach(number => {

  client.calls
  .create({
    url: 'http://demo.twilio.com/docs/voice.xml', // Your TwiML Bin URL here.
    to: 'number',
    from: '+15017122661' // Your Twilio number here.
  })
  .then(call => console.log(call.sid));
  
});

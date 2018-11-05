app.use('/group_call', function(req, res) {

  const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
  const authToken = 'your_auth_token';
  const client = require('twilio')(accountSid, authToken);
  var numbers = ["+1234567910", "+1234567911", "+1234567912"];

  numbers.forEach(function(number){

    client.calls
      .create({
        url: 'http://yourdomain.com/conference',
        to: number,
        from: '+15017122661',
      })
      .then(call => console.log(call.sid));

  });

})

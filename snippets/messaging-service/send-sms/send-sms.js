const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         body: 'Phantom Menace was clearly the best of the prequel trilogy.',
         messagingServiceSid: 'MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
         to: '+15558675310'
       })
      .then(message => console.log(message.sid))
      .done();


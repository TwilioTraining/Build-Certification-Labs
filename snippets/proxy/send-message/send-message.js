// If you do not already have it installed, you will need twilio-node 
// installed to run this code: https://www.npmjs.com/package/twilio

const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.proxy.services('KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
            .sessions('KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
            .participants('KPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
            .messageInteractions
            .create({body: 'body'})
            .then(message_interaction => console.log(message_interaction.sid))
            .done();

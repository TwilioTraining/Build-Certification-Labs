// If you do not already have it installed, you will need twilio-node 
// installed to run this code: https://www.npmjs.com/package/twilio

const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.proxy.services('KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
            .sessions('KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
            .participants
            .create({friendlyName: 'Alice', identifier: '+15558675310'})
            .then(participant => console.log(participant.sid))
            .done();

const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.proxy.services('KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
            .phoneNumbers
            .create({sid: 'PNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'})
            .then(phone_number => console.log(phone_number.sid))
            .done();

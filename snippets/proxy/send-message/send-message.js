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

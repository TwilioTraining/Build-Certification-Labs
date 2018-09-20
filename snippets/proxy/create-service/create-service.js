const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.proxy.services.create({uniqueName: 'uniqueName'})
                     .then(service => console.log(service.sid))
                     .done();

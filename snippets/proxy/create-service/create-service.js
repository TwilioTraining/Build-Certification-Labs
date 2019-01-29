// If you do not already have it installed, you will need twilio-node 
// installed to run this code: https://www.npmjs.com/package/twilio

const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.proxy.services.create({uniqueName: 'uniqueName'})
                     .then(service => console.log(service.sid))
                     .done();

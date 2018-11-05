const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.notify.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
             .bindings
             .create({
                identity: '00000001',
                bindingType: 'sms',
                address: '+1651000000000',
                tag: ['sales']
              })
             .then(binding => console.log(binding.sid))
             .done();

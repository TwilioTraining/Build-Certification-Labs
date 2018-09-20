const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.taskrouter.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                 .activities
                 .create({
                    available: false,
                    friendlyName: 'WrapUp'
                  })
                 .then(activity => console.log(activity.sid))
                 .done();

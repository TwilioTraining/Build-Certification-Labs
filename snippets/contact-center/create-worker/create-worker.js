const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.taskrouter.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                 .workers
                 .create({attributes: JSON.stringify({
                      'skills': 'support'
                  }), friendlyName: 'Support Worker 1'})
                 .then(worker => console.log(worker.sid))
                 .done();

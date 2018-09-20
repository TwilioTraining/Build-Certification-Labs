const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.taskrouter.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                 .tasks
                 .create({attributes: JSON.stringify({
                      selected_product: 'support'
                  }), workflowSid: 'WWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'})
                 .then(task => console.log(task.sid))
                 .done();

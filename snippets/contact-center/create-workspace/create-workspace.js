const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.taskrouter.workspaces
                 .create({
                    eventCallbackUrl: 'http://requestb.in/vh9reovh',
                    template: 'FIFO',
                    friendlyName: 'NewWorkspace'
                  })
                 .then(workspace => console.log(workspace.sid))
                 .done();

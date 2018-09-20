const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.taskrouter.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
      .taskQueues
      .create({
         targetWorkers: `skills HAS "support"`,
         friendlyName: 'Support',
         reservationActivitySid: 'WAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
         assignmentActivitySid: 'WAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
       })
      .then(task_queue => console.log(task_queue.sid))
      .done();

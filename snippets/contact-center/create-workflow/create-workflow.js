const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.taskrouter.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
  .workflows
  .create({
    friendlyName: 'Sales, Marketing, Support Workflow',
    configuration: JSON.stringify({
      task_routing: {
        filters: [
          {
            expression: `selected_product=='sales'`,
            targets: [
              {
                queue: sales_taskqueue_sid
              }
            ]
          },
          {
            expression: `selected_product=='marketing'`,
            targets: [
              {
                queue: marketing_taskqueue_sid
              }
            ]
          },
          {

            expression: `selected_product=='manager'`,
            targets: [
              {
                queue: manager_taskqueue_sid
              }
            ]
          },
          {
            expression: `selected_product=='support'`,
            targets: [
              {
                queue: support_taskqueue_sid
              }
            ]
          }
        ],
        default_filter: {
          queue: 'WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
        }
      }
    })
  })
  .then(workflow => console.log(workflow.sid))
  .done();

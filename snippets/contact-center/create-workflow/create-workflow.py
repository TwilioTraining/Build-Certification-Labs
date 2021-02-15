# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client
import json

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

config = {
 'task_routing': {
   'filters': [
     {
       'friendly_name': 'marketing filter',
       'expression': "selected_product == 'marketing'",
       'targets': [{'queue': marketing_taskqueue_sid}]
     },
     {
       'friendly_name': 'support filter',
       'expression': "selected_product == 'support'",
       'targets': [{'queue': support_taskqueue_sid}]
     },
     {
       'friendly_name': 'sales filter',
       'expression': "selected_product == 'sales'",
       'targets': [{'queue': sales_taskqueue_sid}]
     },
     {
       'friendly_name': 'manager filter',
       'expression': "selected_product == 'managers'",
       'targets': [{'queue': managers_taskqueue_sid}]
     },
   ],
   'default_filter': {
     'queue': support_taskqueue_sid
   }
 }
}

workflow = client.taskrouter \
    .workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
    .workflows \
    .create(
         friendly_name='Sales, Marketing, Support Workflow',
         configuration=json.dumps(config))

print(workflow.sid)

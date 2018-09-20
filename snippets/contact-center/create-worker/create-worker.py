from twilio.rest import Client
import json

# Your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

worker = client.taskrouter \
               .workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
               .workers \
               .create(attributes=json.dumps({
                    skills: 'support'
                }), friendly_name='Support Worker 1')

print(worker.sid)

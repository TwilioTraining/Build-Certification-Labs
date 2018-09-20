# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client

# Your Account SID and Auth Token from twilio.com/console
account_sid = 'ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
auth_token = 'xxxxxxxxxxxxxxxxxxxxxxxxxxx'
client = Client(account_sid, auth_token)

service = client.proxy.services.create(unique_name='a unique name')

print(service.sid)

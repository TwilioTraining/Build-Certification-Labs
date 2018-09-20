# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client

# Your Account SID and Auth Token from twilio.com/console
account_sid = 'ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
auth_token = 'xxxxxxxxxxxxxxxxxxxxxxxxxxx'
client = Client(account_sid, auth_token)

proxy_sid = 'KSxxxxxxxxxxxxxxxxxxxxxxxxxx'

phone_number = client.proxy.services(proxy_sid) \
                          .sessions \
                          .create(unique_name='MyFirstSessions')

print(session.sid)

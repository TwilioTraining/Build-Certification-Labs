# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client

# Your Account SID and Auth Token from twilio.com/console
account_sid = 'ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
auth_token = 'xxxxxxxxxxxxxxxxxxxxxxxxxxx'
client = Client(account_sid, auth_token)

proxy_sid = 'KSxxxxxxxxxxxxxxxxxxxxxxxxxx'
session_sid = 'KCxxxxxxxxxxxxxxxxxxxxxxxxxx'
participant_sid = 'KPxxxxxxxxxxxxxxxxxxxxxxxxx'

message_interaction = client.proxy \
                   .services(proxy_sid) \
                   .sessions(session_sid) \
                   .participants(participant_sid) \
                   .message_interactions \
                   .create(body='Reply to this message to chat!')

print(message_interaction.sid)

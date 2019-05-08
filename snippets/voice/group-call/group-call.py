# Download the helper library from https://www.twilio.com/docs/python/install
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# DANGER! This is insecure. See http://twil.io/secure
account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

numbers = ['+12345678910', '+12345678911', '+12345678912']

for number in numbers:
  call = client.calls.create(
    url = 'http://demo.twilio.com/docs/voice.xml', # Your TwiML Bin URL here.
    to = number,
    from_ = '+15017122661' # Your Twilio phone number here.
  )
  print(call.sid)

from twilio.rest import Client

account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

notification = client.notify \
                     .services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                     .notifications \
                     .create(body='Hello Bob', identity='00000001')

print(notification.sid)

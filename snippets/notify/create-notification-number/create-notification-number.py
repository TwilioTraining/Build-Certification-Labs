from twilio.rest import Client
import json

account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

notification = client.notify \
                     .services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                     .notifications \
                     .create(
                          body='Knock-Knock! This is your first Notify SMS',
                          to_binding= [
                            json.dumps({'binding_type': 'sms','address': '+1651000000000'}),
                            json.dumps({'binding_type': 'sms','address': '+1651000000001'})
                          ]
                      )

print(notification.sid)

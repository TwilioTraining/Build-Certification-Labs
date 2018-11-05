from twilio.rest import Client

account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

binding = client.notify.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') \
                       .bindings \
                       .create(
                            identity='00000001',
                            binding_type='sms',
                            tag=['sales'],
                            address='+1651000000000'
                        )

print(binding.sid)

require 'rubygems'
require 'twilio-ruby'

account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

service = @client.notify.services
                 .create(
                    messaging_service_sid: 'MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                    friendly_name: 'My Notify Service'
                  )

puts service.sid

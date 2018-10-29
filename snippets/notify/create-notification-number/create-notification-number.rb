require 'rubygems'
require 'twilio-ruby'

account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
auth_token = 'your_auth_token'
@client = Twilio::REST::Client.new(account_sid, auth_token)

notification = @client.notify
                      .services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .notifications
                      .create(
                         body: 'Knok-Knok! This is your first Notify SMS',
                         to_binding: {
                           'binding_type' => 'sms',
                           'address' => '+1651000000000'
                       }.to_json,
                         identity: ['identity']
                       )

puts notification.sid

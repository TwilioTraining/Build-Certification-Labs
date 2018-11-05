@app.route("/group_call", methods=['GET', 'POST'])
def dial_group():
  
   #http://916d20ff.ngrok.io/
   # Create a group call endpoint that calls anyone that has messaged my Twilio number today

   resp = VoiceResponse()
   numbers = ['+12345678910', '+12345678911', '+12345678912']
   for number in numbers:
       client.calls.create(
           from_ = caller_id,
           to=number,
           url='http://916d20ff.ngrok.io/conference'
       )

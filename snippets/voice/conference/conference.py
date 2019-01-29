#add this import from twilio.twiml.voice_response import Conference, Dial, VoiceResponse


@app.route("/conference", methods=['GET', 'POST'])
def conference():
   resp = VoiceResponse()
   dial = Dial()
   dial.conference('trainingconference')
   resp.append(dial)
   return str(resp)


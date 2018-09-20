@app.route("/conference", methods=['GET', 'POST'])
def conference():
   resp = VoiceResponse()
   dial = Dial()
   dial.conference('trainingconference')
   resp.append(dial)
   return Response(str(resp), mimetype='text/xml')

@app.route("/incoming_call", methods=['GET', 'POST'])
def incoming_call():
      resp = VoiceResponse()
   with resp.gather(num_digits="1", action="/enqueue_call", timeout=10) as g:
      g.say("Please select from the following departments", language="en")
      g.say("For sales press one, for support press two, for marketing press three", language="en")
   return Response(str(resp), mimetype='text/xml')

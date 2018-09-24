@app.route("/enqueue_call", methods=["GET", "POST"])
def enqueue_call():
     if 'Digits' in request.values:
        choice = int(request.values['Digits'])
        dept = {
            1: "sales",
            2: "support",
            3: "billing"
        }
        resp = VoiceResponse()
        resp.say('Thank you, connecting you now')
        with resp.enqueue(workflow_sid=workflow_sid) as e:
            e.task('{"selected_product" : "' + dept[choice] + '"}')
        return Response(str(resp), mimetype='text/xml')
    else:
        resp = VoiceResponse()
        resp.say("no digits detected")   #tell user something is amiss
        resp.redirect("/incoming_call")  #redirect back to initial step
    return Response(str(resp), mimetype='text/xml')

from twilio.rest import Client
from twilio.twiml.messaging_response import MessagingResponse
from flask import Flask, request, redirect
from datetime import datetime
import os

app = Flask(__name__)

@app.route("/forward", methods=['GET', 'POST'])
def sms_ahoy_reply():
    # Start our response
    resp = MessagingResponse()

    # Grab values from incoming message.
    message_from = request.values.get('From', None)
    message_body = request.values.get('Body', None)

    # Forward the message onto a new number.
    resp.message(body=message_from + ": \n " + message_body, to=os.getenv('MY_MOBILE'))

    return str(resp)

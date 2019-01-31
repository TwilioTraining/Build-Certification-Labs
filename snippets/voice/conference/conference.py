
from flask import Flask, request, redirect
from twilio import twiml
from twilio.twiml.voice_response import Conference, Dial, VoiceResponse
import requests 
import json

app = Flask(__name__)

@app.route("/conference", methods=['GET', 'POST'])
def conference():
   resp = VoiceResponse()
   dial = Dial()
   dial.conference('trainingconference')
   resp.append(dial)
   return str(resp)

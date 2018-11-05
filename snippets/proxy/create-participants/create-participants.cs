using System;
using Twilio;
using Twilio.Rest.Proxy.V1.Service;	 
const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const string authToken = "your_auth_token";

TwilioClient.Init(accountSid, authToken);

var participant = ParticipantResource.Create(
    friendlyName: "Alice",
    identifier: "+15558675310",
    pathServiceSid: "KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    pathSessionSid: "KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
);

Console.WriteLine(participant.sid);

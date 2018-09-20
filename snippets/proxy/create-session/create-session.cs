using System;
using Twilio;
using Twilio.Rest.Proxy.V1.Service;

// Find your Account Sid and Token at twilio.com/console
const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const string authToken = "your_auth_token";

TwilioClient.Init(accountSid, authToken);

var session = SessionResource.Create(
    pathServiceSid: "KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
);

Console.WriteLine(session.Sid);

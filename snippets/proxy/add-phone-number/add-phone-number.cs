using System;
using Twilio;
using Twilio.Rest.Proxy.V1.Service;

const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const string authToken = "your_auth_token";

TwilioClient.Init(accountSid, authToken);

var phoneNumber = PhoneNumberResource.Create(
    sid: "PNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    pathServiceSid: "KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
);

Console.WriteLine(phoneNumber.Sid);

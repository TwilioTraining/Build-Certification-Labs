using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using Twilio;
using Twilio.Converters;
using Twilio.Rest.Notify.V1.Service;

class Program
{
  static void Main(string[] args)
  {
    const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    const string authToken = "your_auth_token";

    TwilioClient.Init(accountSid, authToken);

    var toBinding = new List<string> {
            JsonConvert.SerializeObject(new Dictionary<string, Object>()
            {
                {"binding_type", "sms"},
                {"address", "+1651000000000"}
            }, Formatting.Indented),
            JsonConvert.SerializeObject(new Dictionary<string, Object>()
            {
                {"binding_type", "sms"},
                {"address", "+1651000000001"}
            }, Formatting.Indented)
        };

    var notification = NotificationResource.Create(
        body: "Knock-Knock! This is your first Notify SMS",
        toBinding: toBinding,
        pathServiceSid: "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    );

    Console.WriteLine(notification.Sid);
  }
}

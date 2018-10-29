using System;
using Twilio;
using Twilio.Rest.Notify.V1;

class Program
{
  static void Main(string[] args)
  {
    const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    const string authToken = "your_auth_token";

    TwilioClient.Init(accountSid, authToken);

    var service = ServiceResource.Create(
        messagingServiceSid: "MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        friendlyName: "My Notify Service"
    );

    Console.WriteLine(service.Sid);
  }
}

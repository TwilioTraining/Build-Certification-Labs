using System;
using System.Collections.Generic;
using Twilio;
using Twilio.Rest.Notify.V1.Service;

class Program
{
  static void Main(string[] args)
  {
    const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    const string authToken = "your_auth_token";

    TwilioClient.Init(accountSid, authToken);

    var binding = BindingResource.Create(
        identity: "00000001",
        bindingType: BindingResource.BindingTypeEnum.Sms,
        tag: new List<string>{"sales"},
        address: "+1651000000000",
        pathServiceSid: "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    );

    Console.WriteLine(binding.Sid);
  }
}

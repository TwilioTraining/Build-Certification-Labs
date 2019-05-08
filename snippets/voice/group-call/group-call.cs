// Install the C# / .NET helper library from twilio.com/docs/csharp/install

using System;
using Twilio;
using Twilio.Rest.Api.V2010.Account;


class Program 
{
    static void Main(string[] args)
    {
        // Find your Account Sid and Token at twilio.com/console
        // DANGER! This is insecure. See http://twil.io/secure
        const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        const string authToken = "your_auth_token";
            
        string[] numbers = {"+1234567910", "+1234567911", "+1234567912"};

        TwilioClient.Init(accountSid, authToken);
        
        foreach (string number in numbers) {
                var call = CallResource.Create(
                    url: new Uri("http://demo.twilio.com/docs/voice.xml"), // Your TwiML Bin URL here.
                    to: new Twilio.Types.PhoneNumber(number),
                    from: new Twilio.Types.PhoneNumber("+15017122661") // Your Twilio phone number here.
                );

                Console.WriteLine(call.Sid);
                
        }
}

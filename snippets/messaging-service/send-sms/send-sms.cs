using System;
using Twilio;

class Example
{
  static void Main(string[] args)
  {
    // Find your Account Sid and Auth Token at twilio.com/user/account
    string AccountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    string AuthToken = "your_auth_token";
    var twilio = new TwilioRestClient(AccountSid, AuthToken);

    var message = twilio.SendMessageWithService(
        "MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "+15558675310",
        "Phantom Menace was clearly the best of the prequel trilogy."
    );
    Console.WriteLine(message.Sid);
  }
}

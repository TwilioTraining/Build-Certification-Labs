const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const string authToken = "your_auth_token";

TwilioClient.Init(accountSid, authToken);

var message = MessageResource.Create(
    messagingServiceSid: "MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    to: new Twilio.Types.PhoneNumber("+15558675310"),
    body: "Phantom Menace was clearly the best of the prequel trilogy."
);
Console.WriteLine(message.Sid);
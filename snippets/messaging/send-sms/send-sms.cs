const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const string authToken = "your_auth_token";

TwilioClient.Init(accountSid, authToken);

var message = MessageResource.Create(
    from: new Twilio.Types.PhoneNumber("+15017122661"),
    body: "Body",
    to: new Twilio.Types.PhoneNumber("+15017122661")
);
Console.WriteLine(message.Sid);

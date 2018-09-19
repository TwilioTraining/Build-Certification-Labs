const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const string authToken = "your_auth_token";

TwilioClient.Init(accountSid, authToken);

var message = MessageResource.Create(
	body: "Hello there!",
	from: new Twilio.Types.PhoneNumber("+15555555555"),
	mediaUrl: Promoter.ListOfOne(new Uri("https://demo.twilio.com/owl.png")),
	to: new Twilio.Types.PhoneNumber("+12316851234")
);

Console.WriteLine(message.Sid);

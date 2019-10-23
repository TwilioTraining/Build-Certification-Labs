const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
const string authToken = "your_auth_token";
TwilioClient.Init(accountSid, authToken);

var localAvailableNumbers = LocalResource.Read("US", areaCode: 510);

// Purchase the first number on the list
var firstNumber = localAvailableNumbers.First();
var incomingPhoneNumber = IncomingPhoneNumberResource.Create(
    phoneNumber: firstNumber.PhoneNumber
);

Console.WriteLine(incomingPhoneNumber.Sid);

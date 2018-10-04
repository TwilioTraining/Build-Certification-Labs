using System;
using Twilio;
using Twilio.Rest.Taskrouter.V1;

class Program
{
  static void Main(string[] args)
  {
    // Find your Account Sid and Token at twilio.com/console
    const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    const string authToken = "your_auth_token";

    TwilioClient.Init(accountSid, authToken);

    var workspace = WorkspaceResource.Create(
        template: "FIFO",
        friendlyName: "NewWorkspace"
    );

    Console.WriteLine(workspace.Sid);
  }
}

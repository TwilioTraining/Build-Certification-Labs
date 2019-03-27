using System;
using Twilio;
using Twilio.Rest.Taskrouter.V1.Workspace;

class Program
{
  static void Main(string[] args)
  {
    // Find your Account Sid and Token at twilio.com/console
    const string accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    const string authToken = "your_auth_token";

    TwilioClient.Init(accountSid, authToken);

    var taskQueue = TaskQueueResource.Create(
        targetWorkers: "skills HAS \"support\"",
        friendlyName: "Support",
        pathWorkspaceSid: "WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    );

    Console.WriteLine(taskQueue.Sid);
  }
}

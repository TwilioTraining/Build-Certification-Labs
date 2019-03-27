using Newtonsoft.Json;
using System;
using System.Collections.Generic;
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

        var configuration = JsonConvert.SerializeObject(new Dictionary<string, Object>()
        {
            {"task_routing", new Dictionary<string, Object>()
                {
                    {"filters", new object [] {
                        new Dictionary<string, Object>()
                        {
                            {"expression", "selected_product=='sales'"},
                            {"targets", new object [] {
                                new Dictionary<string, Object>()
                                {
                                    {"queue", sales_taskqueue_sid}
                                }
                            }}
                        },
                        new Dictionary<string, Object>()
                        {
                            {"expression", "selected_product=='marketing'"},
                            {"targets", new object [] {
                                new Dictionary<string, Object>()
                                {
                                    {"queue", marketing_taskqueue_sid}
                                }
                            }}
                        },
                        new Dictionary<string, Object>()
                        {
                            {"expression", "type=='support'"},
                            {"targets", new object [] {
                                new Dictionary<string, Object>()
                                {
                                    {"queue", support_taskqueue_sid}
                                }
                            }}
                        },
                        new Dictionary<string, Object>()
                        {
                            {"expression", "selected_product ==manager"},
                            {"targets", new object [] {
                                new Dictionary<string, Object>()
                                {
                                    {"queue", manager_taskqueue_sid}
                                }
                            }}
                        }

                    }},
                    {"default_filter", new Dictionary<string, Object>()
                        {
                            {"queue", "WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}
                        }}
                }}
        }, Formatting.Indented);

        var workflow = WorkflowResource.Create(
            friendlyName: "Sales, Marketing, Support Workflow",
            configuration: configuration,
            pathWorkspaceSid: "WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
        );

        Console.WriteLine(workflow.Sid);
    }
}

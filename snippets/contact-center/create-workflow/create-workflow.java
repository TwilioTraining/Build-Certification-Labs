// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.taskrouter.v1.workspace.Workflow;

import java.net.URI;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Workflow workflow = Workflow.creator(
                "WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "Sales, Marketing, Support Workflow",
                "{"task_routing": {"filters": [{"expression": "selected_product=='sales'", "targets": [{"queue": "WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}]}, {"expression": "selected_product=='marketing'", "targets": [{"queue": "WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}]}, {"expression": "selected_product=='support'", "targets": [{"queue": "WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}]}], "default_filter": {"queue": "WQXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}}}")          
            .setTaskReservationTimeout(30)
            .create();

        System.out.println(workflow.getSid());
    }
}
// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.base.ResourceSet;
import com.twilio.rest.taskrouter.v1.workspace.Activity;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = "AC3bd9961b14f6dc4190b702d11efa8a84";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        ResourceSet<Activity> activities = 
            Activity.reader("WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
            .read();

        for(Activity record : activities) {
            System.out.println(record.getSid());
        }
    }
}
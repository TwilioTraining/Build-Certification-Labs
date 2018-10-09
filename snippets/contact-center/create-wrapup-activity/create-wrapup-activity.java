import com.twilio.Twilio;
import com.twilio.rest.taskrouter.v1.workspace.Activity;

public class Example {
    // Find your Account Sid and Token at twilio.com/console
    public static final String ACCOUNT_SID = System.getenv("ACCOUNT_SID");
    public static final String AUTH_TOKEN = System.getenv("AUTH_TOKEN");

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Activity activity = Activity.creator(
                "WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "WrapUp")
            .setAvailable(false).create();

        System.out.println(activity.getSid());
    }
}

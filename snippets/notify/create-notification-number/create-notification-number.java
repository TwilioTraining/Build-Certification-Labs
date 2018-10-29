import com.twilio.Twilio;
import com.twilio.converter.Promoter;
import com.twilio.rest.notify.v1.service.Notification;

public class Example {
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Notification notification = 
            Notification.creator("ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
            .setBody("Knok-Knok! This is your first Notify SMS")
            .setToBinding(
                Promoter.listOfOne("{\"binding_type\":\"sms\", \"address\":\"+1651000000000\"}"))
            .setIdentity(Promoter.listOfOne("identity"))
            .create();

        System.out.println(notification.getSid());
    }
}
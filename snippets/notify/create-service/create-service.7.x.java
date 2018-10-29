import com.twilio.Twilio;
import com.twilio.rest.notify.v1.Service;

public class Example {
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Service service = Service.creator()
            .setMessagingServiceSid("MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
            .setFriendlyName("My Notify Service")
            .create();

        System.out.println(service.getSid());
    }
}
import com.twilio.Twilio;
import com.twilio.converter.Promoter;
import com.twilio.rest.notify.v1.service.Notification;
import java.util.ArrayList;
import java.util.List;

public class Example {
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        
        List<String> listSendTo = new ArrayList<>();
        listSendTo.add("{\"binding_type\":\"sms\", \"address\":\"+1651000000000\"}");
        listSendTo.add("{\"binding_type\":\"sms\", \"address\":\"+1651000000001\"}");
        Notification notification = 
            Notification.creator("ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
            .setBody("Knok-Knok! This is your first Notify SMS")
            .setToBinding(listSendTo)
            .create();

        System.out.print("+ Notification SID: " + notification.getSid());
        System.out.print(", Text: " + notification.getBody());
        System.out.print(", Date: " + notification.getDateCreated());
        System.out.println("");
    }
}

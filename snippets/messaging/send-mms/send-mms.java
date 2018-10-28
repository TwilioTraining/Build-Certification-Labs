import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import com.twilio.converter.Promoter;
import java.net.URI;

public class send_mms {

    private static final String ACCOUNT_SID = System.getenv("ACCOUNT_SID");
    private static final String AUTH_TOKEN = System.getenv("AUTH_TOKEN");

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        String fromPhoneNumber = "+15017122661";
        String toPhoneNumber = "+15558675310";
        String theMsg = "This is the ship that made the Kessel Run in fourteen parsecs?";
        Message message
                = Message.creator(
                        new PhoneNumber(toPhoneNumber),
                        new PhoneNumber(fromPhoneNumber),
                        theMsg
                ).setMediaUrl(
                        Promoter.listOfOne(URI.create("https://citrine-flamingo-3939.twil.io/assets/mini-falcon.jpg")))
                        .create();
        // Immediately returned values:
        System.out.print("+ Message SID: " + message.getSid());
        System.out.print(", Status: " + message.getStatus());
        System.out.print(", from: " + message.getFrom());
        System.out.print(", to: " + message.getTo());
        System.out.print(", " + message.getBody());
        System.out.println("");
    }
}

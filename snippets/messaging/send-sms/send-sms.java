import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
public class send_sms {

    private static final String ACCOUNT_SID = System.getenv("ACCOUNT_SID");
    private static final String AUTH_TOKEN = System.getenv("AUTH_TOKEN");

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        String fromPhoneNumber = System.getenv("PHONE_NUMBER2");
        String toPhoneNumber = System.getenv("PHONE_NUMBER3");
        String theMsg = "This is the ship that made the Kessel Run in fourteen parsecs?";
        Message message
                = Message.creator(
                        new PhoneNumber(toPhoneNumber),
                        new PhoneNumber(fromPhoneNumber),
                        theMsg
                ).create();
        // Immediately returned values:
        System.out.print("+ Message SID: " + message.getSid());
        System.out.print("+ from: " + message.getFrom());
        System.out.print(", to: " + message.getTo());
        System.out.print(", Status: " + message.getStatus());
        System.out.print(", " + message.getBody());
        System.out.println("");
    }
}

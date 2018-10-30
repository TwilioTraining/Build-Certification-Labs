import com.twilio.Twilio;
import com.twilio.rest.notify.v1.service.Binding;

public class Example {
    public static final String ACCOUNT_SID = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    public static final String AUTH_TOKEN = "your_auth_token";

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Binding binding = Binding.creator(
                "ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "00000001",
                Binding.BindingType.SMS,
                "+1651000000000")
            .create();

        System.out.print("+ Binding SID: " + binding.getSid());
        System.out.print("+ Identity: " + binding.getIdentity());
        System.out.print("+ Binding type: " + binding.getBindingType());
        System.out.print("+ Address: " + binding.getAddress());
        System.out.println("");
    }
}

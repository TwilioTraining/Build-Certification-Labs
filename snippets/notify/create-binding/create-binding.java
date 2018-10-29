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

        System.out.println(binding.getSid());
    }
}
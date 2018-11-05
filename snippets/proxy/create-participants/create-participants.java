import com.twilio.Twilio;
import com.twilio.rest.proxy.v1.service.session.Participant;

public class create_participants {

    private static final String ACCOUNT_SID = System.getenv("ACCOUNT_SID");
    private static final String AUTH_TOKEN = System.getenv("AUTH_TOKEN");

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);

        // https://www.twilio.com/docs/proxy/api/participant
        Participant participant = Participant.creator(
                System.getenv("PROXY_SERVICE_SID"),
                "KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                "+15558675310"
        )
                .setFriendlyName("Alice").create();

        System.out.println("+ Participant added to Proxy service session, ProxyIdentifier: " + participant.getSid());
    }
}

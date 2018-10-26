package proxy;

import com.twilio.Twilio;
import com.twilio.rest.proxy.v1.service.Session;

public class create_session {

    private static final String ACCOUNT_SID = System.getenv("ACCOUNT_SID");
    private static final String AUTH_TOKEN = System.getenv("AUTH_TOKEN");

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);

        // https://www.twilio.com/docs/proxy/api/session
        Session session = Session.creator(System.getenv("PROXY_SERVICE_SID"))
                .setUniqueName("MyFirstSession").create();
        System.out.println("+ New Proxy service session SID: " + session.getSid());
    }
}

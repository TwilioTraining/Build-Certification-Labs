package proxy;

import com.twilio.Twilio;
import com.twilio.rest.proxy.v1.Service;

public class create_service {

    private static final String ACCOUNT_SID = System.getenv("ACCOUNT_SID");
    private static final String AUTH_TOKEN = System.getenv("AUTH_TOKEN");

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);

        // Create a service.
        Service service = Service.creator("myProxyName").create();
        String serviceSid = service.getSid();
        
        // Retrieve a service.
        // https://www.twilio.com/docs/proxy/api/service
        service = Service.fetcher(serviceSid).fetch();
        System.out.print("+ Created Proxy service, SID: " + serviceSid);
        System.out.print(", " + service.getUniqueName());
        System.out.println("");
    }
}

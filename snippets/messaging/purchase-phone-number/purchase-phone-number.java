import com.twilio.Twilio;
import com.twilio.base.ResourceSet;
import com.twilio.rest.api.v2010.account.IncomingPhoneNumber;
import com.twilio.rest.api.v2010.account.availablephonenumbercountry.Local;
import com.twilio.type.PhoneNumber;

public class purchase_phone_number {

    private static final String ACCOUNT_SID = System.getenv("ACCOUNT_SID");
    private static final String AUTH_TOKEN = System.getenv("AUTH_TOKEN");

    public static void main(String[] args) {

        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);

        ResourceSet<Local> numbers = Local.reader("US").setAreaCode(650).read();
        PhoneNumber buyAvailableNumber = numbers.iterator().next().getPhoneNumber();
        //
        IncomingPhoneNumber.creator(buyAvailableNumber).create();
        System.out.println("+ Bought availableNumber: " + buyAvailableNumber);
        //
        System.out.println("+ List account numbers:");
        ResourceSet<IncomingPhoneNumber> accnumbers = IncomingPhoneNumber.reader().read();
        for (IncomingPhoneNumber number : accnumbers) {
            System.out.println(
                    "++ " + number.getPhoneNumber()
                    + " " + number.getDateCreated()
                    + " " + number.getFriendlyName()
            );
        }
        System.out.println("+ List of other available numbers:");
        while (numbers.iterator().hasNext()) {
            PhoneNumber availableNumber = numbers.iterator().next().getPhoneNumber();
            System.out.println("++ " + availableNumber);
        }
    }
}

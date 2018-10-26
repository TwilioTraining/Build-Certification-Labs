import com.twilio.twiml.voice.Dial;
import com.twilio.twiml.VoiceResponse;
import com.twilio.twiml.TwiMLException;
import com.twilio.twiml.voice.Number;

public class group_call {

    public static void main(String[] args) {

        // https://www.twilio.com/docs/voice/twiml/number
        Number number1 = new Number.Builder("510-555-1111").build();
        Number number2 = new Number.Builder("510-555-3333").build();
        Number number3 = new Number.Builder("510-555-5555").build();
        Dial dial = new Dial.Builder()
                .number(number1)
                .number(number2)
                .number(number3)
                .build();
        VoiceResponse response = new VoiceResponse.Builder().dial(dial).build();

        try {
            System.out.println(response.toXml());
        } catch (TwiMLException e) {
            e.printStackTrace();
        }
    }
}

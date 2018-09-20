public ActionResult groupCall()
        {
            var response = new VoiceResponse();

            string[] numbers = {"+1234567910", "+1234567911", "+1234567912"};

            TwilioClient.Init(_accountSid, _authToken);
           
            foreach (string number in numbers) {
                var call = CallResource.Create(
                    url: new Uri("http://example.com/conference"),
                    to: new Twilio.Types.PhoneNumber(number),
                    from: new Twilio.Types.PhoneNumber(_called_id)
                );
            }

            return Content(response.ToString(), contentType: "text/xml");
        }


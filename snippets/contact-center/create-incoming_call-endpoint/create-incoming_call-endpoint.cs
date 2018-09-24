public ActionResult Incoming_call()
{   
    var action = new Uri("/Home/enqueue_call");
    var response = new VoiceResponse();
    var gather = new Gather(timeout: 3, numDigits: 1, action: action);
    gather.Say("Please select from the following departments");
    gather.Say("For sales press one, for support press two, for marketing press three", language: "en-gb");

    response.Append(gather);
           
    return Content(response.ToString(), contentType: "text/xml");
}

public ActionResult conference()
{
    var response = new VoiceResponse();
    var dial = new Dial();
    dial.Conference(name: "trainingConference");
    response.Append(dial);
    return Content(response.ToString(), contentType: "text/xml");
}


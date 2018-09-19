public ActionResult sms()
{
var body = Request.Params.Get("body")]
var to = ConfigurationManager.AppSettings["TWILIO_ACME_CALLERID"];
var response = new MessagingResponse();
var message = new Message();
message.body(body);
message.to(to);
response.Append(message);
return Content(response.ToString(), contentType: "text/xml");
}

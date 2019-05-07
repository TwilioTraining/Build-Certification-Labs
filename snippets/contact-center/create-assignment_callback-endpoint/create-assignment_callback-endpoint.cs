public ActionResult assignment_callback()
{
    string response;
    
    response = "{\"instruction\":\"dequeue\", \"from\":\"+15556667777\"}";
    
    return Content(response, contentType: "application/json");
}

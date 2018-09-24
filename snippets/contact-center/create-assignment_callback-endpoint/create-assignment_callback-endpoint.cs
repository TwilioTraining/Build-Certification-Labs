public ActionResult assignment_callback()
{
    string response;
    
    response = "{\"instruction\":\"dequeue\", \"from\":\"+15556667777\", \"post_work_activity_sid\":\"WA0123401234...\"}";
    
    return Content(response, contentType: "application/json");
}

public ActionResult enqueue_call()
{
    var response = new VoiceResponse();
            
    Dictionary<string, string> department = new Dictionary<string, string>();
    department.Add("1", "sales");
    department.Add("2", "support");
    department.Add("3", "billing");

    var enqueue = new Enqueue(workflowSid: workflow_sid]);

    enqueue.Task("{'selected_product:'@" + department[Request.Params.Get("digits")] + @"'}");
    response.Append(enqueue);
            
    return Content(response.ToString(), contentType: "text/xml");
         
}

public void service(HttpServletRequest request, HttpServletResponse response) throws IOException {
    
    Map<String, String> departments = new HashMap<String, String>();
    departments.put("1", "support");
     departments.put("2", "sales");
      departments.put("3", "marketing");
    

    Task task = new Task.Builder().data("{\"selected_product\":\""map.get(request.getParameter("Digits"))"\"}").build();

    Enqueue enqueue =
        new Enqueue.Builder()
        .task(task).workflowSid("WWXXXXXXXXXXXXXXXXXXXXXXXXX").build();

    VoiceResponse twiml = new VoiceResponse.Builder().enqueue(enqueue).build();

    response.setContentType("application/xml");
    try {
      response.getWriter().print(twiml.toXml());
    } catch (TwiMLException e) {
      e.printStackTrace();
    }
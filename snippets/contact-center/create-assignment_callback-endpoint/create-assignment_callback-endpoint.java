public String assignmentCallback() {
    Map<String, String> dequeueInstruction = new HashMap<String, String>();
    dequeueInstruction.put("instruction", "dequeue");
    dequeueInstruction.put("from", "+112345678910");
    dequeueInstruction.put("post_work_activity_sid", "WAXXXXXXXXXXXXXXXXXXXXX");
    response.setContentType("application/json");
    response.getWriter().print(JSONObject.toJSONString(dequeueInstruction));
}
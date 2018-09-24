app.use('/enqueue_call', function(req, res){

const response = new VoiceResponse();
var Digits = req.query.Digits;

var product = {
      1: 'sales',
      2: 'support',
      3: 'marketing'
    }
    
    const enqueue = response.enqueue({workflowSid:workflow_sid });  
    enqueue.task({}, JSON.stringify({selected_product: product[Digits]}));

    res.type('text/xml');
    res.send(response.toString());
});

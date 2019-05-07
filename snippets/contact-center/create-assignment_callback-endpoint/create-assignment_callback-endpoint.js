app.use('/assignment_callback', function(req, res){
// add your Twilio phone number and WrapUp activity sid 
var dequeue = {"instruction": "dequeue", "from": "+12345678910"}

res.type('application/json');

    res.send(dequeue);

});

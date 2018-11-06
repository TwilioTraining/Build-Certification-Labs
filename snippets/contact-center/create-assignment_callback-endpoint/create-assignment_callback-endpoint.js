app.use('/assignment_callback', function(req, res){
// add your Twilio phone number and WrapUp activity sid 
var dequeue = {"instruction": "dequeue", "from": "+12345678910", "post_work_activity_sid": "WAXXXXXXXXXXXXXXXXXXXXX"}

res.type('application/json');

    res.send(dequeue);

});

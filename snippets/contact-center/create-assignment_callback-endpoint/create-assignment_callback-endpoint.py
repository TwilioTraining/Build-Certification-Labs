@app.route("/assignment_callback", methods=['GET', 'POST'])
def acceptTask():
    dequeue = '{"instruction": "dequeue", "from": "'+ caller_id +'", "post_work_activity_sid": "' + wrapUp +'"" }'
    return Response(dequeue, mimetype='application/json')

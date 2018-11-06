@app.route("/assignment_callback", methods=['GET', 'POST'])
def acceptTask():
    caller_id = '+61488842741'
    dequeue = {
        'instruction': 'dequeue',
        'from': caller_id,
        'post_work_activity_sid': wrapup_sid
    }
    # You'll need to use: from flask import jsonify
    return jsonify(dequeue)

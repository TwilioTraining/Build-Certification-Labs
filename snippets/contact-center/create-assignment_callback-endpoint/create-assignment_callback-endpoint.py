@app.route("/assignment_callback", methods=['GET', 'POST'])
def acceptTask():
    caller_id = '+61488842741'
    dequeue = {
        'instruction': 'dequeue',
        'from': caller_id
    }
    # You'll need to use: from flask import jsonify
    return jsonify(dequeue)

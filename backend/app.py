from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
import cv2
import base64
import numpy as np
from gemini import process_query, process_query_file

app = Flask(__name__)
CORS(app)

@app.route('/submit_query', methods=['POST'])
def submit_query():
    data = request.get_json()  # Receive the JSON data sent from the JavaScript fetch call
    user_query = data.get('query', '')
    frame = data.get('frame', '')
    header, encoded = frame.split(',', 1)
    decoded = base64.b64decode(encoded)

    with open('images\image.png', 'wb') as f:
        f.write(decoded)

    response = process_query('images\image.png', user_query)

    # Here you could process the query further, but for now we'll just echo it back.
    result = {"response": f"Here's the response: {response}"}
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)

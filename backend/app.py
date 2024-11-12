from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
import base64
import numpy as np
import tempfile
from gemini import process_query
import os

app = Flask(__name__)
CORS(app)

@app.route('/submit_query', methods=['POST'])
def submit_query():
    data = request.get_json()  # Receive the JSON data sent from the JavaScript fetch call
    user_query = data.get('query', '')
    frame = data.get('frame', '')
    header, encoded = frame.split(',', 1)
    decoded = base64.b64decode(encoded)

    f = tempfile.NamedTemporaryFile(suffix=".png", delete=False)
    response = "ERROR"
    try:
        f.write(decoded)
        f.flush()  # Ensure the data is written to the file
        print(f.name)
        response = process_query(f.name, user_query)
    finally:
        f.close()  # Close the file to release any locks on it
        # You might want to delete the file after use if it's no longer needed
        import os
        os.remove(f.name)


    # with open('images\image.png', 'wb') as f:
    #     f.write(decoded)

    # response = process_query('images\image.png', user_query)
    # os.remove('images\image.png')

    result = {"response": response}
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)

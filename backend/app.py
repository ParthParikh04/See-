from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/submit_query', methods=['POST'])
def submit_query():
    data = request.get_json()  # Receive the JSON data sent from the JavaScript fetch call
    user_query = data.get('query', '')
    # Here you could process the query further, but for now we'll just echo it back.
    result = {"response": f"Server received your message: {user_query}"}
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)

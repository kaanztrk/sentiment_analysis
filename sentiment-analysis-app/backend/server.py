from flask import Flask, request, jsonify
from flask_cors import CORS
from sentiment import sentiment_analysis

app = Flask(__name__)
CORS(app)

history = []  # Initialize an empty list to store sentiment history


@app.route("/", methods=["GET", "POST"])
def results():
    global history

    if request.method == "GET":
        return jsonify(history)

    if request.method == "POST":
        received_data = request.get_json()
        print(f"received data: {received_data}")
        sentence = received_data["value"]
        result = sentiment_analysis(sentence)
        data = {
            "result": result
        }
        # Append the current input and result to history
        history.append({"input": sentence, "result": result})
        return jsonify(data), 201


if __name__ == "__main__":
    app.run(debug=True)

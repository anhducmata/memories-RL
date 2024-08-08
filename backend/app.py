from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

@app.route('/memories', methods=['POST'])
def add_memory():
    data = request.get_json()
    # Save to database
    return jsonify({'message': 'Memory added!'}), 201

@app.route('/interact', methods=['POST'])
def interact():
    data = request.get_json()
    response = generate_response(data['user_input'])
    # Save interaction to database
    return jsonify({'response': response})


def generate_response(user_input):
    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=user_input,
        max_tokens=50
    )
    return response.choices[0].text.strip()

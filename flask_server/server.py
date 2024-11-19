from flask import Flask, request, jsonify
from flask_cors import CORS
import bcrypt
import re
from pymongo import MongoClient

app = Flask(__name__)
CORS(app, resources={
    r"/*": {
        "origins": ["http://localhost:3000"],
        "methods": ["OPTIONS", "GET", "POST", "PUT", "DELETE"],
        "allow_headers": ["Content-Type"]
    }
})


client = MongoClient("mongodb+srv://rajansethupathyoffl:BngQC2mVAQXNvept@freelancecluster.k85ns.mongodb.net/?retryWrites=true&w=majority&appName=FreelanceCluster")
db = client['qldb']
collection = db['users']

def validate_email(email):
    return re.match(r'^[^@]+@[^@]+\.[^@]+$', email)

@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")
    confirm_password = data.get("confirm_password")

    if not name or not email or not password or not confirm_password:
        return jsonify({'error': 'All fields are required!'}), 400
    if not validate_email(email):
        return jsonify({'error': 'Invalid email format!'}), 400
    if password != confirm_password:
        return jsonify({'error': 'Passwords do not match!'}), 400

    # Check if the email is already registered
    if collection.find_one({'email': email}):
        return jsonify({'error': 'Email is already registered!'}), 400

    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)

    user = {"name": name, "email": email, "password": hashed_password}
    collection.insert_one(user)

    return jsonify({"message": "User registered successfully!"}), 201


if __name__ == '__main__':
    app.run(debug=True)
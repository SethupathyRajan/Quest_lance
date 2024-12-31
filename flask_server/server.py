from flask import Flask, request, jsonify
from flask_cors import CORS
import bcrypt
import re
import os
import requests
from pymongo import MongoClient

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# MongoDB connection
DB_URI = os.getenv('DB_CONNECT')
client = MongoClient(DB_URI)
db = client['qlDB']
users_collection = db['users']

# Helper function to validate email
def is_valid_email(email):
    return re.match(r'^[^@]+@[^@]+\.[^@]+$', email)

# Signup route
@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    name = data.get("name")  # Matches frontend's "name"
    email = data.get("email")  # Matches frontend's "email"
    password = data.get("password")  # Matches frontend's "password"
    confirm_password = data.get("confirmPassword")  # Matches frontend's "confirmPassword"
    phone = data.get("phone")  # Matches frontend's "phone"

    # Validate required fields
    if not name or not email or not password or not confirm_password or not phone:
        return jsonify({'error': 'All fields are required!'}), 400
    
    # Validate email format
    if not is_valid_email(email):
        return jsonify({'error': 'Invalid email format!'}), 400

    # Validate password match
    if password != confirm_password:
        return jsonify({'error': 'Passwords do not match!'}), 400

    # Check if the email is already registered
    if users_collection.find_one({'email': email}):
        return jsonify({'error': 'Email is already registered!'}), 400

    # Hash the password
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)

    # Create user document
    new_user = {
        "name": name,
        "email": email,
        "password": hashed_password,
        "phone": phone,
    }

    # Insert the user into the database
    users_collection.insert_one(new_user)

    return jsonify({"message": "User registered successfully!"}), 201

# Login route
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')  # Matches frontend's "email"
    password = data.get('password')  # Matches frontend's "password"

    # Find user in the database
    user = users_collection.find_one({"email": email})

    if not user:
        return jsonify({'error': 'Email not found!'}), 400

    # Validate password
    if not bcrypt.checkpw(password.encode('utf-8'), user['password']):
        return jsonify({'error': 'Invalid password!'}), 400

    return jsonify({'message': 'Login successful!'}), 200

# Chat route using OpenAI API
OPENAI_API_KEY = os.getenv('API_KEY')  # Replace with your OpenAI API key

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        user_message = data.get("message", "")

        # Call OpenAI API
        response = requests.post(
            "https://api.openai.com/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {OPENAI_API_KEY}",
                "Content-Type": "application/json"
            },
            json={
                "model": "gpt-3.5-turbo",
                "messages": [
                    {"role": "system", "content": "You are a helpful assistant."},
                    {"role": "user", "content": user_message}
                ]
            },
        )
        result = response.json()
        return jsonify({"response": result["choices"][0]["message"]["content"]})
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": "Something went wrong"}), 500



@app.route('/profile', methods=['GET'])
def get_profile():
    # Extract email from query parameters
    email = request.args.get('email')

    if not email:
        return jsonify({'error': 'Email is required to fetch profile!'}), 400

    # Find user by email
    user_data = users_collection.find_one({'email': email}, {'_id': 0})
    if user_data:
        return jsonify(user_data)
    return jsonify({'error': 'User not found!'}), 404


@app.route('/profile', methods=['PUT'])
def update_profile():
    # Extract email and updated data from the request
    data = request.json
    email = data.get('email')  # Email passed in the body for simplicity

    if not email:
        return jsonify({'error': 'Email is required to update profile!'}), 400

    # Remove the email from the update data
    update_data = {key: value for key, value in data.items() if key != 'email'}

    # Update user data
    result = users_collection.update_one({'email': email}, {'$set': update_data})

    if result.matched_count == 0:
        return jsonify({'error': 'User not found!'}), 404

    return jsonify({'message': 'Profile updated successfully!'})

if __name__ == '__main__':
    app.run(debug=True)

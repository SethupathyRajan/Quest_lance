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
sellers_collection = db['sellers']

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

@app.route('/slogin', methods=['POST'])
def slogin():
    data = request.json
    email = data.get('email')  # Matches frontend's "email"
    password = data.get('password')  # Matches frontend's "password"

    # Find user in the database
    user = sellers_collection.find_one({"email": email})

    if not user:
        return jsonify({'error': 'Email not found!'}), 400

    # Validate password
    if not bcrypt.checkpw(password.encode('utf-8'), user['password']):
        return jsonify({'error': 'Invalid password!'}), 400

    return jsonify({'message': 'Login successful!'}), 200

@app.route('/profile', methods=['GET'])
def get_profile():
    email = request.args.get('email')
    if not email:
        return jsonify({'error': 'Email is required to fetch profile!'}), 400

    user = users_collection.find_one({'email': email}, {'_id': 0})
    if not user:
        return jsonify({'error': 'User not found!'}), 404

    return jsonify(user), 200

@app.route('/profile', methods=['PUT'])
def update_profile():
    data = request.json
    email = data.get('email')

    if not email:
        return jsonify({'error': 'Email is required for update!'}), 400

    user = users_collection.find_one({'email': email})
    if not user:
        return jsonify({'error': 'User not found!'}), 404

    update_data = {k: v for k, v in data.items() if k != 'email' and v is not None}

    if 'name' in update_data and len(update_data['name'].strip()) == 0:
        return jsonify({'error': 'Name cannot be empty!'}), 400

    if 'phone' in update_data and not re.match(r'^\d{10}$', update_data['phone']):
        return jsonify({'error': 'Invalid phone number format!'}), 400

    users_collection.update_one({'email': email}, {'$set': update_data})
    return jsonify({'message': 'Profile updated successfully!'}), 200


@app.route('/register', methods=['POST'])
def register_seller():
    data = request.get_json()
    password = data.get('password')

    # Ensure required fields are present
    required_fields = ['name', 'email', 'password', 'phone', 'skills', 'experience']
    for field in required_fields:
        if field not in data:
            return jsonify({"message": f"{field} is required!"}), 400

    # Check if email already exists
    if sellers_collection.find_one({"email": data['email']}):
        return jsonify({"message": "Email already exists!"}), 400

    # Hash the password
    salt=bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode("utf-8"), salt)

    # Create new seller document
    seller = {
        "name": data['name'],
        "email": data['email'],
        "password": hashed_password,
        "phone": data['phone'],
        "skills": data['skills'],
        "experience": data['experience'],
    }

    # Add portfolio_url if provided
    if 'portfolio_url' in data and data['portfolio_url']:
        seller['portfolio_url'] = data['portfolio_url']

    # Insert into MongoDB
    sellers_collection.insert_one(seller)

    return jsonify({"message": "Seller registered successfully!"}), 201


if __name__ == '__main__':
    app.run(debug=True)

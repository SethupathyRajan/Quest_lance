from flask import Flask, request, jsonify
from flask_cors import CORS
import bcrypt
import re
from pymongo import MongoClient

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


client = MongoClient("mongodb+srv://rajansethupathyoffl:BngQC2mVAQXNvept@freelancecluster.k85ns.mongodb.net/?retryWrites=true&w=majority&appName=FreelanceCluster&ssl=true", tls=True, tlsAllowInvalidCertificates=False)
db = client['qlDB']
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
    business_name = data.get("business_name")
    phone = data.get("phone")
    category = data.get("category")
    description = data.get("description")

    # Validate required fields
    if not name or not email or not password or not confirm_password or not business_name or not phone or not category or not description:
        return jsonify({'error': 'All fields are required!'}), 400
    
    # Validate email format
    if not validate_email(email):
        return jsonify({'error': 'Invalid email format!'}), 400

    # Validate password match
    if password != confirm_password:
        return jsonify({'error': 'Passwords do not match!'}), 400

    # Check if the email is already registered
    if collection.find_one({'email': email}):
        return jsonify({'error': 'Email is already registered!'}), 400

    # Hash password
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)

    # Create user object with all relevant data
    user = {
        "name": name,
        "email": email,
        "password": hashed_password,
        "business_name": business_name,
        "phone": phone,
        "category": category,
        "description": description
    }

    # Insert user into the database
    collection.insert_one(user)

    return jsonify({"message": "User registered successfully!"}), 201



@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email, password = data['email'], data['password']

    # Find user in the database
    user = collection.find_one({"email": email})

    if not user:
        return jsonify({'error': 'Email not found!'}), 400


    # Validate password
    if not bcrypt.checkpw(password.encode('utf-8'), user['password']):
        return jsonify({'error': 'Invalid password!'}), 400

    return jsonify({
        'message': 'Login successful!'    }), 200

if __name__ == '__main__':
    app.run(debug=True)
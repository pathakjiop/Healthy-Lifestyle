from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Import routes after app is initialized to avoid circular imports
from app import routes

from flask import Flask
from flask_cors import CORS

from app import socketio,db
import os

def create_app():
    app_settings = os.getenv("APP_SETTINGS")
    app = Flask(__name__)
    app.config.from_object(app_settings)
    CORS(app,resources={r"/*":{"origins":"*"}})
    db.init_app(app)
    register_extensions(app)
    
    return app

def register_extensions(app):
    socketio.init_app(app, async_mode='eventlet',cors_allowed_origins="*")

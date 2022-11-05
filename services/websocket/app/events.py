from flask_socketio import emit
from flask import request
from app.socket import socketio
from app.crud import *
from app.model import *


@socketio.on('connect')
def test_connect():
    """event listener when client has connected to the server"""
    print(f"client {request.sid} has connected")
    emit("connect",request.sid,broadcast=True)

@socketio.on("disconnect")
def test_disconnected():
    """event listener when client disconnects to the server"""
    print(f"client {request.sid} has disconnected")
    emit("disconnect",f"user {request.sid} disconnected",broadcast=True)
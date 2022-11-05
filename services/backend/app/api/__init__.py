from flask_restx import Api
from app.api.ping import ping_namespace
from app.api.messages import message_namespace

api = Api(version="1.0",title="APIs",doc="/docs/")

api.add_namespace(ping_namespace,"/ping")
api.add_namespace(message_namespace,"/messages")


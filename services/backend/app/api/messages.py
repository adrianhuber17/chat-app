from flask import request,jsonify
from flask_restx import Namespace,Resource,fields,model
from helper.models import Message
from app import db
from helper.crud import get_all_messages,add_message

message_namespace = Namespace("message")

message = message_namespace.model("Message",
                                    {"id":fields.Integer(readOnly=True),
                                    "text":fields.String(required=True),
                                    "date":fields.Date})


class Messages(Resource):
    @message_namespace.marshal_with(message,as_list=True)
    def get(self):
        messages = get_all_messages()
        return messages,200
        
    @message_namespace.expect(message,validate=True)
    def post(self):
        post_data = request.get_json()
        text = post_data.get('text')
        latest_message = add_message(text)

        if latest_message["status"] == "error":
            print(latest_message)
            return latest_message,400

        return latest_message,200


message_namespace.add_resource(Messages,"")
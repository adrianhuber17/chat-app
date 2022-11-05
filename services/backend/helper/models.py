import datetime
import os
from app import db
from sqlalchemy.sql import func

class Message(db.Model):

    __tablename__ =  "message"

    id = db.Column(db.Integer,primary_key=True,autoincrement=True)
    text = db.Column(db.Text())
    date = db.Column(db.DateTime,default=func.now(),nullable=False)
# manage.py

from app import create_app,db
from flask.cli import FlaskGroup
from helper.models import Message

app = create_app()
cli = FlaskGroup(create_app=create_app)

@cli.command('populate_db')
def populate_db():
    "populate reseted database" 
    message = Message(text="First message!")
    db.session.add(message)
    db.session.commit()
    print("database creation completed")

@cli.command('reset_db')
def recreate_db():
    """delete and reset database"""
    db.drop_all()
    db.create_all()
    db.session.commit()
    print("database reset done!")

if __name__ == "__main__":
    cli()
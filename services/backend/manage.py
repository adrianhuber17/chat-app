# manage.py

from backend.app import create_app,db
from flask.cli import FlaskGroup

app = create_app()
cli = FlaskGroup(create_app=create_app)

@cli.command('populate_db')
def populate_db():
    #TODO: populate db once database has been created
    pass

@cli.command('reset_db')
def recreate_db():
    """delete and reset database"""
    db.drop_all()
    db.create_all()
    db.session.commit()
    print("database reset done!")

if __name__ == "__main__":
    cli()
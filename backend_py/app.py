from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer)
    username = db.Column(db.String)
    email = db.Column(db.String)
    password = db.Column(db.String)

class Post(db.Model):
    id = db.Column(db.Integer)
    title = db.Column(db.String)
    body = db.Column(db.String)
    user_id = db.Column(db.Integer)
    comments = db.relationship('Comment')

class Comment(db.Model):
    id = db.Column(db.Integer)
    body = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'))

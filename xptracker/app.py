from flask import Flask
from graphene import ObjectType, String, Schema

def create_app(config=None):
    app = Flask(__name__)

    @app.route('/')
    def index():
        return "Hello World"
    
    return app
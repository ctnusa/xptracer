from http import HTTPStatus

from flask import Flask, jsonify, request
from graphene import Schema, String, ObjectType
from schema import schema

def create_app(config=None):
    app = Flask(__name__)

    @app.route('/')
    def index():
        return "Hello World"
    
    @app.route('/graphql', methods=["POST"])
    def graphql():
        data = request.get_json()
        if "query" not in data:
            return jsonify({"error": "Missing 'query' in request"}), HTTPStatus.BAD_REQUEST
        
        result = schema.execute(data["query"], variables=data.get("variables"))
        if result.errors:
            return jsonify({"errors": [str(error) for error in result.errors]}), HTTPStatus.BAD_REQUEST
        return jsonify(result.data), HTTPStatus.OK

    return app

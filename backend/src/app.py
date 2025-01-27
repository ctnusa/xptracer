from dotenv import load_dotenv

load_dotenv()  # noqa: skip-imports

import os
from http import HTTPStatus

from configs import app_config
from db import db
from flask import Flask, jsonify, request
from flask_bcrypt import Bcrypt
from schema import schema

bcrypt = Bcrypt()


def create_app(env):
    app = Flask(__name__)
    app.config.from_object(app_config[env])

    bcrypt.init_app(app)
    db.init_app(app)

    with app.app_context():
        db.create_all()

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


if __name__ == "__main__":
    app = create_app(os.getenv("XPTRACER_ENV", "dev"))
    app.run(debug=os.getenv("DEBUG", False))

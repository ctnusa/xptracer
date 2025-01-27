from dotenv import load_dotenv

load_dotenv()  # noqa: skip-imports

import os
from http import HTTPStatus

from configs import app_config
from db import db
from flask import Flask, jsonify, request
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from schema import schema

bcrypt = Bcrypt()


def create_app(env):
    """
    Create and configure the Flask application.

    Args:
        env (str): The name of the configuration to use. Should be one of 'dev', 'test', or 'prod'.

    Returns:
        Flask: The configured Flask application instance.

    This function sets up the Flask application with the specified configuration, initializes extensions,
    and defines the routes for the application.
    """
    app = Flask(__name__)
    app.config.from_object(app_config[env])

    bcrypt.init_app(app)
    db.init_app(app)

    with app.app_context():
        db.create_all()

    login_manager = LoginManager()
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(user_id):
        """
        Load user by ID.

        Args:
            user_id (int): The ID of the user to load.

        Returns:
            UserModel: The user instance.
        """
        from models.user_model import UserModel
        return UserModel.query.get(user_id)

    @app.route('/graphql', methods=["POST"])
    def graphql():
        """
        GraphQL endpoint.

        This endpoint handles GraphQL queries sent via POST requests.

        Returns:
            Response: A JSON response containing the result of the GraphQL query or an error message.
        """
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
    # app.run(debug=os.getenv("DEBUG", False))
    app.run(debug=True)

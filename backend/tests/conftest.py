import os
import sys

import pytest
sys.path.append(os.path.join(os.path.dirname(__file__), '../src'))
from src.app import create_app, db


@pytest.fixture()
def app():
    app = create_app("test")

    with app.app_context():
        db.create_all()
        yield app
        db.drop_all()

    return app


@pytest.fixture()
def client(app):
    return app.test_client()

import pytest
from app import create_app
from app.extension import db


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

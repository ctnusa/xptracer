import pytest
from src import bcrypt
from src.models.user_model import UserModel
from src.extension import db

@pytest.fixture
def create_user():
    """
    Fixture to create a user in the database.

    Returns:
        function: A function that creates a user with the given details.
    """
    def _create_user(username, email, password, firstname, lastname):
        hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")
        user = UserModel(
            username=username,
            email=email,
            password=hashed_password,
            firstname=firstname,
            lastname=lastname
        )
        db.session.add(user)
        db.session.commit()
        return user
    return _create_user

@pytest.fixture
def get_user():
    """
    Fixture to retrieve a user from the database by username.

    Returns:
        function: A function that retrieves a user with the given username.
    """
    def _get_user(username):
        return db.session.query(UserModel).filter_by(username=username).first()
    return _get_user

@pytest.fixture
def delete_user():
    """
    Fixture to delete a user from the database by username.

    Returns:
        function: A function that deletes a user with the given username.
    """
    def _delete_user(username):
        user = db.session.query(UserModel).filter_by(username=username).first()
        db.session.delete(user)
        db.session.commit()
    return _delete_user
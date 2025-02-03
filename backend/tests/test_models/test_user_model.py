from src import bcrypt
from src.extension import db
from src.models.user_model import UserModel
from flask import Flask
import pytest


def test_create_user(app: Flask, create_user):
    """
    Test case for creating a user in the database.

    Args:
        app (Flask): The Flask application instance.
        create_user (function): Fixture to create a user in the database.

    Asserts:
        The user was created and retrieved successfully from the database.
    """
    # Create a test user
    create_user('testuser', 'test@example.com', 'testpassword', 'Test', 'User')

    # Retrieve the user from the database
    retrieved_user = db.session.query(UserModel).filter_by(username='testuser').first()

    # Check that the user was retrieved successfully
    assert retrieved_user is not None
    assert retrieved_user.username == 'testuser'
    assert retrieved_user.email == 'test@example.com'
    assert bcrypt.check_password_hash(retrieved_user.password, 'testpassword')
    assert retrieved_user.firstname == 'Test'
    assert retrieved_user.lastname == 'User'
    assert retrieved_user.is_active == True


def test_update_user(app: Flask, create_user, get_user):
    """
    Test case for updating a user's email in the database.

    Args:
        app (Flask): The Flask application instance.
        create_user (function): Fixture to create a user in the database.
        get_user (function): Fixture to retrieve a user from the database.

    Asserts:
        The user's email was updated successfully in the database.
    """
    # Create a test user
    create_user('testuser', 'test@example.com', 'testpassword', 'Test', 'User')

    # Retrieve the user from the database
    user = get_user('testuser')

    # Update the user's email
    user.email = 'newemail@example.com'
    db.session.commit()

    # Retrieve the updated user from the database
    updated_user = get_user('testuser')

    # Check that the user's email was updated successfully
    assert updated_user.email == 'newemail@example.com'


def test_delete_user(app: Flask, create_user, get_user, delete_user):
    """
    Test case for deleting a user from the database.

    Args:
        app (Flask): The Flask application instance.
        create_user (function): Fixture to create a user in the database.
        get_user (function): Fixture to retrieve a user from the database.
        delete_user (function): Fixture to delete a user from the database.

    Asserts:
        The user was deleted successfully from the database.
    """
    # Create a test user
    create_user('testuser', 'test@example.com', 'testpassword', 'Test', 'User')

    # Delete the user from the database
    delete_user('testuser')

    # Try to retrieve the deleted user from the database
    deleted_user = get_user('testuser')

    # Check that the user was deleted successfully
    assert deleted_user is None


def test_query_users(app: Flask, create_user):
    """
    Test case for querying multiple users from the database.

    Args:
        app (Flask): The Flask application instance.
        create_user (function): Fixture to create a user in the database.

    Asserts:
        All users were retrieved successfully from the database.
    """
    # Create multiple test users
    users = [
        ('user1', 'user1@example.com', 'password1', 'User', 'One'),
        ('user2', 'user2@example.com', 'password2', 'User', 'Two'),
        ('user3', 'user3@example.com', 'password3', 'User', 'Three')
    ]
    for username, email, password, firstname, lastname in users:
        create_user(username, email, password, firstname, lastname)

    # Query all users from the database
    all_users = db.session.query(UserModel).all()

    # Check that all users were retrieved successfully
    assert len(all_users) == 3
    assert all_users[0].username == 'user1'
    assert all_users[1].username == 'user2'
    assert all_users[2].username == 'user3'

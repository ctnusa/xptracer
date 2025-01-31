from app import bcrypt
from app.extension import db
from app.models.user_model import UserModel
from flask import Flask
from sqlalchemy import select


def test_create_user(app: Flask, create_user):
    # Create a test user
    create_user('testuser', 'test@example.com', 'testpassword', 'Test', 'User')

    # Retrieve the user from the database
    retrieved_user = db.session.query(
        UserModel).filter_by(username='testuser').first()

    # Check that the user was retrieved successfully
    assert retrieved_user is not None
    assert retrieved_user.username == 'testuser'
    assert retrieved_user.email == 'test@example.com'
    assert bcrypt.check_password_hash(retrieved_user.password, 'testpassword')
    assert retrieved_user.firstname == 'Test'
    assert retrieved_user.lastname == 'User'
    assert retrieved_user.is_active == True


def test_update_user(app: Flask, create_user, get_user):
    create_user('testuser', 'test@example.com', 'testpassword', 'Test', 'User')
    retrieved_user = get_user('testuser')

    # Update the user's email
    retrieved_user.email = 'newemail@example.com'
    db.session.commit()

    # Retrieve the updated user from the database
    retrieved_user = get_user('testuser')

    # Check that the user's email was updated successfully
    assert retrieved_user.email == 'newemail@example.com'


def test_delete_user(app: Flask, create_user, get_user, delete_user):
    create_user('testuser', 'test@example.com', 'testpassword', 'Test', 'User')
    delete_user('testuser')

    # Try to retrieve the deleted user from the database
    deleted_user = get_user('testuser')

    # Check that the user was deleted successfully
    assert deleted_user is None


def test_query_users(app: Flask):
    # Create multiple test users
    users = [
        UserModel(username='user1', email='user1@example.com', password=bcrypt.generate_password_hash(
            "password1").decode("utf-8"), firstname='User', lastname='One'),
        UserModel(username='user2', email='user2@example.com', password=bcrypt.generate_password_hash(
            "password2").decode("utf-8"), firstname='User', lastname='Two'),
        UserModel(username='user3', email='user3@example.com', password=bcrypt.generate_password_hash(
            "password3").decode("utf-8"), firstname='User', lastname='Three')
    ]
    db.session.bulk_save_objects(users)
    db.session.commit()

    # Query all users from the database
    all_users = db.session.execute(select(UserModel)).scalars().all()

    # Check that all users were retrieved successfully
    assert len(all_users) == 3
    assert all_users[0].username == 'user1'
    assert all_users[1].username == 'user2'
    assert all_users[2].username == 'user3'

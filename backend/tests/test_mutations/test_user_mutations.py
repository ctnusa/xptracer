from typing import Any

from app import bcrypt
from app.extension import db
from app.models.user_model import UserModel
from flask import Flask


def test_login_user_success(app: Flask, client: Any):
    with app.app_context():
        # Create a test user
        hashed_password = bcrypt.generate_password_hash(
            'testpassword').decode('utf-8')
        user = UserModel(username='testuser', email='test@example.com',
                         password=hashed_password, firstname='Test', lastname='User')
        db.session.add(user)
        db.session.commit()
        print(db.session.query(UserModel).filter_by(username="testuser").first().email)

        # Define the login mutation
        login_mutation = '''mutation LoginUser($username: String!, $password: String!) {
            loginUser(username: $username, password: $password) {
                ok
            }
        }'''

        variables = {
            'username': 'testuser',
            'password': 'testpassword'
        }

        # Execute the login mutation
        response = client.post('/graphql', json={
            'query': login_mutation,
            'variables': variables
        })

        # Parse the response data
        result = response.get_json()

        # Assert the response
        assert result['loginUser']['ok'] == True

def test_login_user_invalid_password(client):
    # Define the login mutation
    login_mutation = '''
    mutation loginUser($username: String!, $password: String!) {
        loginUser(username: $username, password: $password) {
            ok
            message
        }
    }
    '''

    variables = {
        'username': 'testuser',
        'password': 'wrongpassword'
    }

    # Execute the login mutation with an invalid password
    response = client.post('/graphql', json={
        'query': login_mutation,
        'variables': variables
    })

    # Parse the response data
    result = response.get_json()

    # Assert the response
    assert result['loginUser']['ok'] == False
    assert result['loginUser']['message'] == 'Invalid username or password.'

def test_logout_user(client):
    # Define the logout mutation
    logout_mutation = '''
    mutation {
        logoutUser {
            ok
        }
    }
    '''

    # Execute the logout mutation
    response = client.post('/graphql', json={
        'query': logout_mutation
    })

    # Parse the response data
    result = response.get_json()

    # Assert the response
    assert result['logoutUser']['ok'] == True
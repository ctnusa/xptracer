from typing import Any

from app import bcrypt
from app.extension import db
from app.models.user_model import UserModel
from flask import Flask


def test_login_user_success(app: Flask, client: Any):
    with app.app_context():
        # # Create a test user
        # hashed_password = bcrypt.generate_password_hash(
        #     'testpassword').decode('utf-8')
        # user = UserModel(username='testuser', email='test@example.com',
        #                  password=hashed_password, firstname='Test', lastname='User')
        # db.session.add(user)
        # db.session.commit()
        # print(db.session.query(UserModel).filter_by(username="testuser").first().email)

        # Define the login mutation
        login_mutation = '''mutation LoginUser($username: String!, $password: String!) {
            loginUser(username: $username, password: $password) {
                ok
            }
        }'''

        # login_mutation = '''
        #     mutation {
        #     loginUser(username: "testuser", password: "testpassword") {
        #         ok
        #     }
        # }
        # '''

        variables = '''{
            'username': 'testuser',
            'password': 'testpassword'
        }'''
        # print(db.session.query(UserModel).filter_by(username="testuser").first().email)
        # Execute the login mutation
        response = client.post('/graphql', json={
            # 'query': login_mutation
            'query': login_mutation,
            'variables': variables
        })

        # Parse the response data
        result = response.get_json()
        # print(result)

        # Assert the response
        assert result['loginUser']['ok'] == True

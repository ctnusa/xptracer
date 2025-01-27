import os
import sys
sys.path.append(os.path.join(os.path.dirname(__file__), '../../src'))
from src.models.user_model import UserModel

from src.app import bcrypt, db
from sqlalchemy import select




def test_user_model(app):
    # Create a test user
    hashed_password = bcrypt.generate_password_hash("password").decode("utf-8")
    user = UserModel(
        username='testuser',
        email='test@example.com',
        password=hashed_password,
        firstname='Test',
        lastname='User'
    )

    # Add the user to the database
    db.session.add(user)
    db.session.commit()

    # Retrieve the user from the database
    retrieved_user = select(UserModel).where(
        UserModel.username == 'testuser').execute().first()

    # Check that the user was retrieved successfully
    assert retrieved_user is not None
    assert retrieved_user.username == 'testuser'
    assert retrieved_user.email == 'test@example.com'
    assert bcrypt.check_password_hash(retrieved_user.password, 'testpassword')
    assert retrieved_user.firstname == 'Test'
    assert retrieved_user.lastname == 'User'
    assert retrieved_user.is_active == True

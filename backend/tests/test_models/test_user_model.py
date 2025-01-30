# from app import bcrypt
# from app.extension import db
# from app.models.user_model import UserModel
# from flask import Flask
# from sqlalchemy import select


# def test_user_model(app: Flask):
#     # Create a test user
#     hashed_password = bcrypt.generate_password_hash(
#         "testpassword").decode("utf-8")
#     user = UserModel(
#         username='testuser',
#         email='test@example.com',
#         password=hashed_password,
#         firstname='Test',
#         lastname='User'
#     )

#     # Add the user to the database
#     db.session.add(user)
#     db.session.commit()

#     # Retrieve the user from the database
#     retrieved_user = db.session.execute(select(UserModel).where(
#         UserModel.username == 'testuser')).scalar_one()

#     # Check that the user was retrieved successfully
#     assert retrieved_user is not None
#     assert retrieved_user.username == 'testuser'
#     assert retrieved_user.email == 'test@example.com'
#     assert bcrypt.check_password_hash(retrieved_user.password, 'testpassword')
#     assert retrieved_user.firstname == 'Test'
#     assert retrieved_user.lastname == 'User'
#     assert retrieved_user.is_active == True

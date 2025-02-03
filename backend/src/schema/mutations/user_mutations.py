import re
import string

import graphene
from email_validator import EmailNotValidError, validate_email
from flask_login import current_user, login_user, logout_user
from sqlalchemy import select
from src.extension import db
from src.models.user_model import UserModel
from src.schema.types.user_types import RegisterUserInput, User

users_db = []


class RegisterUser(graphene.Mutation):
    """
    Mutation class for registering a new user.

    Attributes:
        ok (graphene.Boolean): Indicates whether the mutation was successful.
        user (graphene.Field): The newly created user object.
        message (graphene.String): A message indicating the result of the mutation.

    Arguments:
        input (RegisterUserInput): The input data required to register a new user.

    Methods:
        mutate(root, info, input):
            Validates the input data and creates a new user if the data is valid.
            Returns a RegisterUser object with the result of the mutation.
        __validate_username(username):
            Validates the username.
        __validate_email(email):
            Validates the email.
        __validate_password(password):
            Validates the password.
    """
    class Arguments:
        input = RegisterUserInput(required=True)

    ok = graphene.Boolean()
    user = graphene.Field(User)
    message = graphene.String()

    def mutate(root, info, input):
        """
        Validates the input data and creates a new user if the data is valid.

        Args:
            root: The root object (not used).
            info: The GraphQL execution info.
            input (RegisterUserInput): The input data required to register a new user.

        Returns:
            RegisterUser: An object containing the result of the mutation, including the newly created user, a success flag, and a message.
        """
        from src import bcrypt

        # from src.dbs import db

        try:
            RegisterUser.__validate_username(input.username)
            RegisterUser.__validate_email(input.email)
            RegisterUser.__validate_password(input.password)
        except ValueError as e:
            return RegisterUser(ok=False, message=e.args[0])

        new_user = UserModel(
            firstname=input.firstname,
            lastname=input.lastname,
            email=input.email,
            password=bcrypt.generate_password_hash(
                password=input.password).decode("utf-8"),
            username=input.username
        )
        db.session.add(new_user)
        db.session.commit()
        return RegisterUser(user=new_user, ok=True)

    @staticmethod
    def __validate_username(username):
        """
        Validates the username.

        Args:
            username (str): The username to validate.

        Raises:
            ValueError: If the username is invalid.
        """
        # from backend.src.dbs import db

        if " " in username:
            raise ValueError("Username cannot contain spaces.")
        if len(username) < 3 or len(username) > 20:
            raise ValueError("Username must be between 3 and 20 characters.")
        if not re.match(r'^[A-Za-z][A-Za-z0-9_-]*$', username):
            raise ValueError(
                "Username can only contain letters, numbers, underscores, and hyphens, and must start with a letter.")
        if db.session.query(UserModel).filter_by(username=username).first():
            raise ValueError("Username already exists.")

    @staticmethod
    def __validate_password(password):
        if len(password) < 8:
            raise ValueError("Password must be at least 8 characters.")
        if not any(char.isdigit() for char in password):
            raise ValueError("Password must contain at least one digit.")
        if not any(char.isupper() for char in password):
            raise ValueError(
                "Password must contain at least one uppercase letter.")
        if not any(char.islower() for char in password):
            raise ValueError(
                "Password must contain at least one lowercase letter.")
        if not any(char in string.punctuation for char in password):
            raise ValueError(
                "Password must contain at least one special character.")

    @staticmethod
    def __validate_email(email):
        """
        Validates the email.

        Args:
            email (str): The email to validate.

        Raises:
            ValueError: If the email is invalid.
        """
        # from backend.src.dbs import db

        try:
            validate_email(email)
        except EmailNotValidError:
            raise ValueError("Invalid email address.")

        if db.session.query(UserModel).filter_by(email=email).first():
            raise ValueError("Email already exists.")


class LoginUser(graphene.Mutation):
    """
    Mutation class for logging in a user.

    Attributes:
        ok (graphene.Boolean): Indicates whether the mutation was successful.
        message (graphene.String): A message indicating the result of the mutation.

    Arguments:
        username (graphene.String): The username of the user.
        password (graphene.String): The password of the user.

    Methods:
        mutate(root, info, username, password):
            Validates the username and password, and logs in the user if the credentials are correct.
    """
    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)

    ok = graphene.Boolean()
    message = graphene.String()

    def mutate(root, info, username, password):
        """
        Validates the username and password, and logs in the user if the credentials are correct.

        Args:
            root: The root object (not used).
            info: The GraphQL execution info.
            username (str): The username of the user.
            password (str): The password of the user.

        Returns:
            LoginUser: An object containing the result of the mutation, including a success flag and a message.
        """
        from src import bcrypt
        smtm = select(UserModel).where(UserModel.username == username).limit(1)

        # user = db.session.query(UserModel).filter_by(username=username).first()
        user = db.session.execute(smtm).scalar_one_or_none()
        # # print(user)
        if user and bcrypt.check_password_hash(user.password, password):
            login_user(user)
            return LoginUser(ok=True)
        return LoginUser(ok=False, message="Invalid username or password.")


class LogoutUser(graphene.Mutation):
    """
    Mutation class for logging out a user.

    Attributes:
        ok (graphene.Boolean): Indicates whether the mutation was successful.

    Methods:
        mutate(root, info):
            Logs out the user.
    """
    ok = graphene.Boolean()

    def mutate(root, info):
        """
        Logs out the user.

        Args:
            root: The root object (not used).
            info: The GraphQL execution info.

        Returns:
            LogoutUser: An object containing the result of the mutation, including a success flag.
        """
        logout_user()
        return LogoutUser(ok=True)

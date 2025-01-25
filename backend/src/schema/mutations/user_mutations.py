import re
import string

import graphene
from email_validator import EmailNotValidError, validate_email
from models.user_model import UserModel

from ..types.user_types import RegisterUserInput, User

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
        from app import bcrypt

        try:
            RegisterUser.__validate_username(input.username)
            RegisterUser.__validate_email(input.email)
            RegisterUser.__validate_password(input.password)
        except ValueError as e:
            return RegisterUser(ok=False, message=e.args[0])

        new_user = UserModel(
            id=len(users_db) + 1,
            firstname=input.firstname,
            lastname=input.lastname,
            email=input.email,
            password=bcrypt.generate_password_hash(
                password=input.password).decode("utf-8"),
            username=input.username
        )

        users_db.append(new_user)
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
        if " " in username:
            raise ValueError("Username cannot contain spaces.")
        if len(username) < 3 or len(username) > 20:
            raise ValueError("Username must be between 3 and 20 characters.")
        if not re.match(r'^[A-Za-z][A-Za-z0-9_-]*$', username):
            raise ValueError(
                "Username can only contain letters, numbers, underscores, and hyphens, and must start with a letter.")
        if any(user.username == username for user in users_db):
            raise ValueError("Username already exists")

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
        try:
            validate_email(email)
        except EmailNotValidError:
            raise ValueError("Invalid email address.")

        if any(user.email == email for user in users_db):
            raise ValueError("Email already exists.")


class LoginUser(graphene.Mutation):
    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)

    ok = graphene.Boolean()
    message = graphene.String()

    def mutate(root, info, username, password):
        from app import bcrypt

        for user in users_db:
            if username == user.username and bcrypt.check_password_hash(user.password, password):
                return LoginUser(success=True)
            return LoginUser(success=False, message="Invalid username or password.")
        return LoginUser(success=False, message="User not found.")


class LogoutUser(graphene.Mutation):
    ok = graphene.Boolean()

    def mutate(root, info):
        return LogoutUser(ok=True)

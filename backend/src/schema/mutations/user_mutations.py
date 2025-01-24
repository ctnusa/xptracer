import re
import string

import graphene
from email_validator import EmailNotValidError, validate_email

from ..types.user_types import RegisterUserInput, User

users_db = []


class RegisterUser(graphene.Mutation):
    class Arguments:
        input = RegisterUserInput(required=True)

        # firstname = graphene.String(required=True)
        # lastname = graphene.String(required=True)
        # username = graphene.String(required=True)
        # email = graphene.String(required=True)
        # password = graphene.String(required=True)

    success = graphene.Boolean()
    user = graphene.Field(User)
    message = graphene.String()

    # def mutate(root, info, firstname, lastname, username, email, password):
    def mutate(root, info, input):
        from app import bcrypt

        # Validate username
        if len(input.username) < 3 or len(input.username) > 20:
            return RegisterUser(ok=False, message="Username must be between 3 and 20 characters.")

        # Allowed characters check (alphanumeric and optional '_', '-')
        if not re.match(r'^[A-Za-z][A-Za-z0-9_-]*$', input.username):
            return RegisterUser(
                ok=False,
                message="Username can only contain letters, numbers, underscores, and hyphens, and must start with a letter."
            )

        # Check for spaces
        if " " in input.username:
            return RegisterUser(ok=False, message="Username cannot contain spaces.")

        # Validate email
        try:
            email = validate_email(input.email)
        except EmailNotValidError:
            return RegisterUser(success=False, message="Invalid email address.")

        # Validate password
        if len(input.password) < 8:
            return RegisterUser(success=False, message="Password must be at least 8 characters.")
        if not any(char.isdigit() for char in input.password):
            return RegisterUser(success=False, message="Password must contain at least one digit.")
        if not any(char.isupper() for char in input.password):
            return RegisterUser(ok=False, message="Password must contain at least one uppercase letter.")
        if not any(char.islower() for char in input.password):
            return RegisterUser(ok=False, message="Password must contain at least one lowercase letter.")
        if not any(char in string.punctuation for char in input.password):
            return RegisterUser(ok=False, message="Password must contain at least one special character.")

        user_id = len(users_db) + 1
        hashed_password = bcrypt.generate_password_hash(
            password=input.password).decode("utf-8")
        new_user = User(
            user_id,
            firstname=input.firstname,
            lastname=input.lastname,
            email=input.email,
            password=hashed_password,
            username=input.username
        )

        users_db.append(new_user)
        return RegisterUser(user=new_user, success=True)


class LoginUser(graphene.Mutation):
    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)

    success = graphene.Boolean()

    def mutate(root, info, username, password):
        from app import bcrypt

        for user in users_db:
            if username == user.username and bcrypt.check_password_hash(user.password, password):
                return LoginUser(success=True)
            return LoginUser(success=False)


# class LogoutUser(graphene.Mutation):
#     pass

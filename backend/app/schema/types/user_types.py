import graphene
from graphene_sqlalchemy import SQLAlchemyObjectType
from app.models.user_model import UserModel


class RegisterUserInput(graphene.InputObjectType):
    """
    The RegisterUserInput class defines the input fields required for registering a user.

    Attributes:
        username (graphene.String): The username of the user.
        email (graphene.String): The email of the user.
        password (graphene.String): The password of the user.
        firstname (graphene.String): The first name of the user.
        lastname (graphene.String): The last name of the user.
    """
    username = graphene.String(required=True)
    email = graphene.String(required=True)
    password = graphene.String(required=True)
    firstname = graphene.String(required=True)
    lastname = graphene.String(required=True)


class User(SQLAlchemyObjectType):
    """
    The User class defines the GraphQL type for the User model.

    Attributes:
        model (UserModel): The SQLAlchemy model for the User.
        exclude_fields (tuple): Fields to exclude from the GraphQL type.
    """
    class Meta:
        model = UserModel
        exclude_fields = ('id', 'password')

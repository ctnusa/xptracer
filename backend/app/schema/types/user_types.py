import graphene
from graphene_sqlalchemy import SQLAlchemyObjectType
from app.models.user_model import UserModel


class RegisterUserInput(graphene.InputObjectType):
    username = graphene.String(required=True)
    email = graphene.String(required=True)
    password = graphene.String(required=True)
    firstname = graphene.String(required=True)
    lastname = graphene.String(required=True)


class User(SQLAlchemyObjectType):
    class Meta:
        model = UserModel
        exclude_fields = ('id', 'password')

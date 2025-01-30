import graphene
from app.schema.types.user_types import User


class UserQuery(graphene.ObjectType):
    user = graphene.Field(User)

    def resolve_user(root, info):
        return User(firstname="Chi Tam", lastname="Nguyen")

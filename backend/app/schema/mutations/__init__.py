import graphene
from app.schema.mutations.user_mutations import LoginUser, LogoutUser, RegisterUser


class Mutation(graphene.ObjectType):
    register_user = RegisterUser.Field()
    login_user = LoginUser.Field()
    logout_user = LogoutUser.Field()

import graphene

from .user_mutations import LoginUser, RegisterUser, LogoutUser


class Mutation(graphene.ObjectType):
    register_user = RegisterUser.Field()
    login_user = LoginUser.Field()
    logout_user = LogoutUser.Field()

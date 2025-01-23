import graphene

from .user_mutations import LoginUser, RegisterUser


class Mutation(graphene.ObjectType):
    register_user = RegisterUser.Field()
    login_user = LoginUser.Field()

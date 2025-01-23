from .user_mutations import CreateUser
import graphene

class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
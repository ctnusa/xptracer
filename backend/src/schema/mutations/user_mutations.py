import graphene

from ..types.user_types import User


class CreateUser(graphene.Mutation):
    class Arguments:
        firstname = graphene.String(required=True)
        lastname = graphene.String(required=True)

    user = graphene.Field(User)

    def mutate(root, info, firstname, lastname):
        return CreateUser(User(firstname=firstname, lastname=lastname))

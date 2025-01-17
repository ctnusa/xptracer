import graphene

class Query(graphene.ObjectType):
    users = graphene.List(User)
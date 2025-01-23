import graphene


class User(graphene.ObjectType):
    firstname = graphene.String()
    lastname = graphene.String()

import graphene


class User(graphene.ObjectType):
    id = graphene.ID()
    firstname = graphene.String()
    lastname = graphene.String()
    username = graphene.String()
    email = graphene.String()
    password = graphene.String()

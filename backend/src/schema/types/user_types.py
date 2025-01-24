import graphene


class RegisterUserInput(graphene.InputObjectType):
    username = graphene.String(required=True)
    email = graphene.String(required=True)
    password = graphene.String(required=True)
    firstname = graphene.String(required=True)
    lastname = graphene.String(required=True)

class User(graphene.ObjectType):
    id = graphene.ID()
    firstname = graphene.String()
    lastname = graphene.String()
    username = graphene.String()
    email = graphene.String()
    password = graphene.String()

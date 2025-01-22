from graphene import ObjectType, String

class UserQuery(ObjectType):
    hello = String()

    def resolve_hello(root, info):
        return "Something here"
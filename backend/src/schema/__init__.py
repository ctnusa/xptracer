from graphene import Schema, String, ObjectType
# from ..queries import Query
from queries import Query

# class UserQuery(ObjectType):
#     hello = String()

#     def resolve_hello(root, info):
#         return "Something here"

schema = Schema(query=Query)
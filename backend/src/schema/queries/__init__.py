import graphene
from src.schema.queries.user_queries import MeQuery


class Query(MeQuery, graphene.ObjectType):
    pass

from graphene import Schema
from .queries import Query

schema = Schema(query=Query)

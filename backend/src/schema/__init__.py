import graphene
from src.schema.mutations import Mutation
from src.schema.queries import Query

schema = graphene.Schema(query=Query, mutation=Mutation)

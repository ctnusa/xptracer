import graphene
from graphene_sqlalchemy import SQLAlchemyObjectType

class User(SQLAlchemyObjectType):
    class Meta:
        model = 'user'
        only_fields = ()
        exclue_fields = ()
        description = ""
        interfaces = ()
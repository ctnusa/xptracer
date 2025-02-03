import graphene
from src.schema.types.user_types import User

class UserQuery(graphene.ObjectType):
    """
    The UserQuery class defines the GraphQL query for retrieving user information.

    Attributes:
        user (graphene.Field): Field for retrieving a user.
    """
    
    user = graphene.Field(User)

    def resolve_user(root, info):
        """
        Resolve the user query.

        Args:
            root: The root object.
            info: The GraphQL execution info.

        Returns:
            User: A user object with predefined firstname and lastname.
        """
        return User(firstname="Chi Tam", lastname="Nguyen")

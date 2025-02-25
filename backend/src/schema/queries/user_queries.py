from flask_jwt_extended import get_jwt_identity, jwt_required
import graphene
from src.models.user_model import UserModel
from src.schema.types.user_types import User
from src.extension import db


class MeQuery(graphene.ObjectType):
    """
    The UserQuery class defines the GraphQL query for retrieving user information.

    Attributes:
        user (graphene.Field): Field for retrieving a user.
    """

    me = graphene.Field(User)

    @jwt_required()
    def resolve_me(root, info):
        """
        Resolve the user query.

        Args:
            root: The root object.
            info: The GraphQL execution info.

        Returns:
            User: A user object with predefined firstname and lastname.
        """
        current_user = get_jwt_identity()
        return db.session.query(UserModel).filter_by(username=current_user).first()

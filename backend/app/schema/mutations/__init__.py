import graphene
from app.schema.mutations.user_mutations import LoginUser, LogoutUser, RegisterUser

# Define the Mutation class which will hold all the mutation fields
class Mutation(graphene.ObjectType):
    """
    The Mutation class holds all the mutation fields for the GraphQL schema.
    
    Attributes:
        register_user (graphene.Field): Field for registering a user.
        login_user (graphene.Field): Field for logging in a user.
        logout_user (graphene.Field): Field for logging out a user.
    """
    
    # Field for registering a user
    register_user = RegisterUser.Field()
    # Field for logging in a user
    login_user = LoginUser.Field()
    # Field for logging out a user
    logout_user = LogoutUser.Field()

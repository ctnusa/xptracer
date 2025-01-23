import graphene

from ..types.user_types import User

users_db = []


class RegisterUser(graphene.Mutation):
    class Arguments:
        firstname = graphene.String(required=True)
        lastname = graphene.String(required=True)
        username = graphene.String(required=True)
        email = graphene.String(required=True)
        password = graphene.String(required=True)

    success = graphene.Boolean()
    user = graphene.Field(User)

    def mutate(root, info, firstname, lastname, username, email, password):
        from app import bcrypt

        user_id = len(users_db) + 1
        hashed_password = bcrypt.generate_password_hash(
            password=password).decode("utf-8")
        new_user = User(user_id, firstname, lastname,
                        username, email, hashed_password)
        users_db.append(new_user)
        return RegisterUser(user=new_user, success=True)


class LoginUser(graphene.Mutation):
    class Arguments:
        username = graphene.String(required=True)
        password = graphene.String(required=True)

    success = graphene.Boolean()

    def mutate(root, info, username, password):
        from app import bcrypt

        for user in users_db:
            if username == user.username and bcrypt.check_password_hash(user.password, password):
                return LoginUser(success=True)
            return LoginUser(success=False)


# class LogoutUser(graphene.Mutation):
#     pass

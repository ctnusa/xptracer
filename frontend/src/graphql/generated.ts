import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/**
 * Mutation class for logging in a user.
 *
 * Attributes:
 *     ok (graphene.Boolean): Indicates whether the mutation was successful.
 *     message (graphene.String): A message indicating the result of the mutation.
 *
 * Arguments:
 *     username (graphene.String): The username of the user.
 *     password (graphene.String): The password of the user.
 *
 * Methods:
 *     mutate(root, info, username, password):
 *         Validates the username and password, and logs in the user if the credentials are correct.
 */
export type LoginUser = {
  __typename?: 'LoginUser';
  message?: Maybe<Scalars['String']['output']>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Mutation class for logging out a user.
 *
 * Attributes:
 *     ok (graphene.Boolean): Indicates whether the mutation was successful.
 *
 * Methods:
 *     mutate(root, info):
 *         Logs out the user.
 */
export type LogoutUser = {
  __typename?: 'LogoutUser';
  ok?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * The Mutation class holds all the mutation fields for the GraphQL schema.
 *
 * Attributes:
 *     register_user (graphene.Field): Field for registering a user.
 *     login_user (graphene.Field): Field for logging in a user.
 *     logout_user (graphene.Field): Field for logging out a user.
 */
export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Mutation class for logging in a user.
   *
   * Attributes:
   *     ok (graphene.Boolean): Indicates whether the mutation was successful.
   *     message (graphene.String): A message indicating the result of the mutation.
   *
   * Arguments:
   *     username (graphene.String): The username of the user.
   *     password (graphene.String): The password of the user.
   *
   * Methods:
   *     mutate(root, info, username, password):
   *         Validates the username and password, and logs in the user if the credentials are correct.
   */
  loginUser?: Maybe<LoginUser>;
  /**
   * Mutation class for logging out a user.
   *
   * Attributes:
   *     ok (graphene.Boolean): Indicates whether the mutation was successful.
   *
   * Methods:
   *     mutate(root, info):
   *         Logs out the user.
   */
  logoutUser?: Maybe<LogoutUser>;
  /**
   * Mutation class for registering a new user.
   *
   * Attributes:
   *     ok (graphene.Boolean): Indicates whether the mutation was successful.
   *     user (graphene.Field): The newly created user object.
   *     message (graphene.String): A message indicating the result of the mutation.
   *
   * Arguments:
   *     input (RegisterUserInput): The input data required to register a new user.
   *
   * Methods:
   *     mutate(root, info, input):
   *         Validates the input data and creates a new user if the data is valid.
   *         Returns a RegisterUser object with the result of the mutation.
   *     __validate_username(username):
   *         Validates the username.
   *     __validate_email(email):
   *         Validates the email.
   *     __validate_password(password):
   *         Validates the password.
   */
  registerUser?: Maybe<RegisterUser>;
};


/**
 * The Mutation class holds all the mutation fields for the GraphQL schema.
 *
 * Attributes:
 *     register_user (graphene.Field): Field for registering a user.
 *     login_user (graphene.Field): Field for logging in a user.
 *     logout_user (graphene.Field): Field for logging out a user.
 */
export type MutationLoginUserArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


/**
 * The Mutation class holds all the mutation fields for the GraphQL schema.
 *
 * Attributes:
 *     register_user (graphene.Field): Field for registering a user.
 *     login_user (graphene.Field): Field for logging in a user.
 *     logout_user (graphene.Field): Field for logging out a user.
 */
export type MutationRegisterUserArgs = {
  input: RegisterUserInput;
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
};

/**
 * Mutation class for registering a new user.
 *
 * Attributes:
 *     ok (graphene.Boolean): Indicates whether the mutation was successful.
 *     user (graphene.Field): The newly created user object.
 *     message (graphene.String): A message indicating the result of the mutation.
 *
 * Arguments:
 *     input (RegisterUserInput): The input data required to register a new user.
 *
 * Methods:
 *     mutate(root, info, input):
 *         Validates the input data and creates a new user if the data is valid.
 *         Returns a RegisterUser object with the result of the mutation.
 *     __validate_username(username):
 *         Validates the username.
 *     __validate_email(email):
 *         Validates the email.
 *     __validate_password(password):
 *         Validates the password.
 */
export type RegisterUser = {
  __typename?: 'RegisterUser';
  message?: Maybe<Scalars['String']['output']>;
  ok?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<User>;
};

/**
 * The RegisterUserInput class defines the input fields required for registering a user.
 *
 * Attributes:
 *     username (graphene.String): The username of the user.
 *     email (graphene.String): The email of the user.
 *     password (graphene.String): The password of the user.
 *     firstname (graphene.String): The first name of the user.
 *     lastname (graphene.String): The last name of the user.
 */
export type RegisterUserInput = {
  email: Scalars['String']['input'];
  firstname: Scalars['String']['input'];
  lastname: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

/**
 * The User class defines the GraphQL type for the User model.
 *
 * Attributes:
 *     model (UserModel): The SQLAlchemy model for the User.
 *     exclude_fields (tuple): Fields to exclude from the GraphQL type.
 */
export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  lastname: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type LoginUserMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser?: { __typename?: 'LoginUser', ok?: boolean | null } | null };


export const LoginUserDocument = gql`
    mutation LoginUser($username: String!, $password: String!) {
  loginUser(username: $username, password: $password) {
    ok
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
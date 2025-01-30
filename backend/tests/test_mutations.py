# def test_create_user_mutation(client):
#     login_mutation = '''
#     mutation RegisterUser($firstname: String!, $lastname: String!, $username: String!, $email: String!, $password: String!) {
#         registerUser(input: {
#             firstname: $firstname, lastname: $lastname, username: $username, email: $email, password: $password
#             }) {
#             user {
#                 firstname
#                 lastname
#                 email
#                 username
#             }
#             ok
#             message
#         }
#     }
#     '''
#     # response = client.post('/graphql', json={'query': mutation})
#     response = client.post('/graphql', json={
#         'query': login_mutation,
#         'variables': {
#             "firstname": "Chi Tam",
#             "lastname": "Nguyen",
#             "username": "tamcn2604",
#             "email": "cnguyen260391@berkeley.edu",
#             "password": "@tamCn2222"
#         }
#     })

#     # print(response.json)
#     print(response)

#     data = response.json['registerUser']['user']
#     assert data['username'] == 'tamcn2604'
#     assert data['email'] == 'cnguyen260391@berkeley.edu'

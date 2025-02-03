# XPTracer

## Description
XPTracer is a web application designed to track and manage user expense. It includes a backend built with Flask and a frontend built with React and Apollo Client.

## Features
- User authentication and authorization
- Experience tracking and management
- GraphQL API for data interactions
- Responsive design with Tailwind CSS

## Installation

### Backend
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```

2. Create a virtual environment:
   ```sh
   python -m venv .venv
   ```
   
3. Activate the virtual environment:

   * On Windows:  
     ```sh
     .venv\Scripts\activate
     ```
   
   * On macOS/Linux:  
     ```sh
     source .venv/bin/activate
     ```

4. Install the dependencies:
   ```sh
   pip install -r requirements.txt
   ```

5. Set up the environment variables:
   Create a .env in the backend directory and edit the variables: <code>XPTRACER_ENV</code>, <code>SECRET_KEY</code>, <code>SQLALCHEMY_DATABASE_URI</code>

6. Run the application:
   ```sh
   python run.py
   ```
   
### Frontend
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```

2. Install the dependencies:
   ```sh
   yarn install
   ```
   
3. Run the application:
   ```sh
   yarn run dev
   ```

## Running Tests
### Backend Tests
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
   
2. Run the tests:
   ```sh
   pytest
   ```

### Frontend Tests
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```

2. Run the unit tests:
   ```sh
   yarn test
   ```

3. Run the unit tests:
   ```sh
    yarn test:e2e
    ```

## Installation
   Configuration settings are managed in the config.py file. Environment-specific settings are defined in the <code>DevelopmentConfig</code>, <code>TestingConfig</code>, and <code>ProductionConfig</code> classes.

### Example Configuration (<code>config.py</code>)
   ```python
   import os

   class Config:
       SQLALCHEMY_DATABASE_URI = os.getenv('SQLALCHEMY_DATABASE_URI', 'sqlite:///:memory:')
       SQLALCHEMY_TRACK_MODIFICATIONS = False
       TESTING = False

   class DevelopmentConfig(Config):
       DEBUG = True
       SECRET_KEY = os.getenv('SECRET_KEY', 'my_precious')

   class TestingConfig(Config):
       TESTING = True
       SECRET_KEY = 'my_precious'

   class ProductionConfig(Config):
       pass

   app_config = {
       "dev": DevelopmentConfig,
       "test": TestingConfig,
       "prod": ProductionConfig
   }
   ```

## GraphQL Code Generation (<code>config.py</code>)
   To generate TypeScript types and hooks for your GraphQL operations, start the backend first and then use the following command:
   ```sh
   yarn graphql-codegen
   ```

### Example Codegen Configuration (<code>codegen.yml</code>)
   ```yml
   overwrite: true
   schema: "http://127.0.0.1:5000/graphql"
   documents: "src/graphql/**/*.graphql"
   generates:
      src/graphql/generated.ts:
      plugins:
         - "typescript"
         - "typescript-operations"
         - "typescript-react-apollo"
      config:
         withHooks: true
   ```

### License
   Specify the license under which the project is distributed.
    
   This `README.md` file provides a comprehensive overview of your project, including installation instructions, running tests, configuration details, and more. Adjust the content as needed to fit your specific project requirements.
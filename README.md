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
2. Create a virtual environment:
   ```sh
   python -m venv .venv
   
3. Activate the virtual environment:  

   • On Windows:
   ```sh
   .venv\Scripts\activate  


   • On macOS/Linux:
   ```sh
   source .venv/bin/activate

4. Install the dependencies:
   ```sh
   pip install -r requirements.txt

5. Set up the environment variables:
6. Run the application:
   ```sh
   flask run
   
### Frontend
1. Navigate to the frontend directory:
   ```sh
   cd frontend

2. Install the dependencies:
   ```sh
   yarn install
   
3. Run the application:
   ```sh
   yarn start

## Running Tests
### Backend Tests
1. Navigate to the backend directory:
   ```sh
   cd backend
   
2. Run the tests:
   ```sh
   pytest

### Frontend Tests
1. Navigate to the frontend directory:
   ```sh
   cd frontend

2. Run the unit tests:
   ```sh
   yarn test

3. Run the unit tests:
   ```sh
    yarn test:e2e

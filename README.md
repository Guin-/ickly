# Ickly
A search interface for NYC Restaurant Inspection Results data

## Setup

1. Install python packages

  `$ pip install -r requirements.txt`

2. Install frontend dependencies

  `$ npm install`

3. Create a `secret_settings` file to store the SECRET_KEY and personal database settings
   to be used in `backend/ickly/settings`

4. Set up your local database and run migrations

## Development

1. From project root start backend server at localhost:8000 

  `$ ./manage.py runserver`

2. Go to frontend directory and run npm start

   `$ cd ickly/frontend`
   `$ npm start`

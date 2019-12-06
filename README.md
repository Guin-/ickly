# Ickly

https://ickly.herokuapp.com/

## Description
Ickly is a user friendly search interface into NYC restaurant health inspection data provided by NYC Open Data.
Users can look up restaurants by name and get a list of detailed inspection data including grades, overall scores, and violation descriptions. It was built with Django, Django Rest Framework, React, Redux, ReactStrap, and Bootstrap.

## Local Setup

### Setup
Create a python3 virtual environment. Then clone the project and follow the steps below to get set up locally. The csv file found at the following path `backend/DOHMH_NYC_Restaurant_Inspection_Results.csv` is included so you can run migrations to see how the app behaves locally. However, it is not the most recent or same file as used in production which is much larger.

1. Install python packages

   `$ pip install -r requirements.txt`

2. Install frontend dependencies

   `$ npm install`

3. Create a `secret_settings` file to store personal database settings
   to be used in `backend/ickly/settings`

4. Set up your local postgres database and run migrations

### Development

1. From the `backend` directory start backend server at localhost:8000

   `$ ./manage.py runserver`

2. From the root directory run npm start

   `$ npm start`

### Testing

1. Run frontend tests

   `$ npm test`

2. Run back end tests

   `$ cd backend`
   `$ pytest`

## Features
- Users can search for restaurants by name
- Users can click on a restaurant to get information on its inspections and violations.
- Search form has typeahead functionality for easier search
- Restaurant addresses are included in drop down results so users can find a specific restaurant if it is part of a chain, or if multiple restaurants have the same name.
- When a user selects a restaurant, the page will autoscroll to the inspections section as well as the currently open inspection to ensure violations are in view when a user expands the inspection for more information.
- The typeahead is automatically cleared and mobile keyboard is autoclosed when the typeahead becomes unfocused.


## Architecture
### Frontend Architecture
- React for UI components
- Redux using react-redux for frontend state management
- react-router for frontend routes
- Reactstrap and native CSS for styling


### Backend Architecture
- Django project served by gunicorn
- Minimal template for serving initial page load
- Django Rest Framework API -- See API [documentation here](https://ickly.herokuapp.com/swagger/) for list of endpoints and models
- PostgreSQL Database

### Deployment
- Deployed on Heroku on heroku-16 stack using python and node buildbacks

## Problems Encountered & Solutions

I wanted users to be able to search for a restaurant by name and see all of its inspections data. The dataset from NYC Open Data was a CSV file whose rows corresponded to inspections and separate violations. However, these rows did include a 'camis' field which was a unique identifier for a business. I wanted to transform this data to match the data models I wanted for Businesses and Inspections and I needed to get all of the unique businesses.

To do so I wrote a custom Django data migration using a generator expression to get the data in the schema I wanted in a PostgreSQL database. I wrote up a [blog post](https://dev.to/guin/writing-a-django-data-migration-with-real-world-example-40m) on this including the custom migration file. I then created a small DRF backend API with a search filter for my frontend to consume.


## Overview
This app displays a list of movies onto the main page by using redux sagas to FETCH movies. When a user clicks on a movie, the ID information is sent to a redux saga, which triggers the reducer to then store the information for that movie. They are also automatically routed the the details page.

On the details page, the store is accessed and react is used in the "return" section to display the details of the movie on the page. 

A many to many SQL join was used in both the genre and movie router to get the movie information needed.



## Prerequisites
Before you get started, make sure you have the following software installed on your computer:

Node.js
PostrgeSQL
Nodemon


## Setup
Create a database called exercise_tracker_app. If you would like to name your database something else, you will need to change exercise_tracker_app to the name of your new database name in server/modules/pool.js
Fork and clone this repository
To generate all necessary tables and seed data, go to the database.sql and run the queries in Postico (we recommend using PostgreSQL and Postico)
Open up your editor of choice (we recommend Visual Studio Code) and run "npm install"
Open two terminals: run "npm run server" in one, and "npm run client" in the other-- the second one will automatically open a new browser tab for you


## Technologies
- PostgreSQL: database
- Node.js
- Express
- Redux: state management
- Sagas
- React.js: front end
- HTML & CSS
- Material UI: styled components
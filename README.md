# burger-eater

[Burger Eater on Heroku!](https://sheltered-river-10363.herokuapp.com/)

## Introduction

Burger Eater is a burger tracking application that allows the user to input a name of a burger which then can be viewed and later marked as "Devoured".

Burger Eater uses Node.js to establish a server which uses an ORM to query a MySQL database to provide data for express-handlebars which serves HTML to the user, as well as public files for the user as well.

## User Interaction

![Burger Eater Home](/public/assets/img/app.PNG)

### Heroku
This app is hosted on Heroku and is ready for use!

### Clone this Repo
To use this app effectively please perform the following:
* run the sql statement found within the schema.db file
* open an integrated terminal and submit "npm install"
* run "npm start" when ready!

## How it Works

### Node.js, Express, & MySQL
The functionality provided by the application is founded on Node.js npm Express and MySQL database. Using these two tools it is possible to host and serve an application which stores and reads data from a dedicated MySQL database!

### express-handlebars
This npm allows for the transformation of strings, arrays, and objects into serve-able HTML. For burgers, as an example, it is possible to pass the SELECT * FROM burgers results array to the index.handlebars file which has it's own scheme for digesting that item. Functions like {{#each}} and conditionals like {{#unless}} allow for recursive and "smart" building of HTML in the exact format in which the HTML will exist. Then, that built-up body is passed into the main.handlebars file and served to the user.

### ORM
ORM is a scheme by which queries can be made to be more varied in their application. Rather than have one SQL statement per unique action, the variables that may pass into each variation can be passed through one 'template' statement per general SQL action: SELECT, UPDATE, INSERT, and DELETE.

ORMs can then be passed into a model, router, etc..

## Credits

* Author: Erik Portillo, Feb 2021


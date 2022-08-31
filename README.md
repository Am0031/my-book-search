# my-book-search

![MIT](https://img.shields.io/badge/License-MIT-blue)

## Summary of the project

This project is about refactoring a book search app setup from RESTful API to GraphQL API.

## Project Links

Deployed page : [https://peaceful-island-50238.herokuapp.com/](https://peaceful-island-50238.herokuapp.com/)

Github repo : [https://github.com/Am0031/my-book-search](https://github.com/Am0031/my-book-search)

## Table of content

- [User story](#user-story)
- [Screenshots of the application](#screenshots-of-the-application)
- [Technologies](#technologies)
- [Refactoring steps](#refactoring-steps)
- [Contact me](#contact-me)

## User story

The user story must remain the same after refactoring.

### Summary

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

### Detailed User journey

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
```

Desktop view of the site :

![Desktop landing page](/other/screenshots/desktop-search-loggedin.png)

## Screenshots of the application

All desktop views:

<details>
<summary>Desktop - Landing page</summary>

![Desktop landing page](/other/screenshots/desktop-landingpage.png)

</details>

<details>
<summary>Desktop - Search results when logged out</summary>

![Desktop - Search page - logged out](/other/screenshots/desktop-search-loggedout.png)

</details>

<details>
<summary>Desktop - Search results when logged in</summary>

![Desktop - Search page - logged in](/other/screenshots/desktop-search-loggedin.png)

</details>

<details>
<summary>Desktop - Search results - books selected</summary>

![Desktop - Search page - logged in](/other/screenshots/desktop-search-booksselected.png)

</details>

<details>
<summary>Desktop - Saved books</summary>

![Desktop - Saved books page](/other/screenshots/desktop-savedbooks.png)

</details>

~

Mobile views:

<details>
<summary>Mobile - Landing page</summary>

![Mobile - About me page](/other/screenshots/mobile-landingpage.png)

</details>

<details>
<summary>Mobile - Search results when logged out</summary>

![Mobile - Projects page](/other/screenshots/mobile-search-loggedout.png)

</details>

<details>
<summary>Mobile - Search results when logged in</summary>

![Mobile - Projects page](/other/screenshots/mobile-search-loggedin.png)

</details>

<details>
<summary>Mobile - Saved books page</summary>

![Mobile - Contact me page](/other/screenshots/mobile-savedbooks.png)

</details>

~

Login/Signup forms:

<details>
<summary>Login form</summary>

![Login modal](/other/screenshots/desktop-login.png)

</details>

<details>
<summary>Signup form</summary>

![Signup modal](/other/screenshots/desktop-signup.png)

</details>

## Technologies

The key technologies and packages used here are:

- Node
- Frontend: Apollo client, React JS with react-dom, react-scripts, react-router-dom, Bootstrap with react-bootstrap, GraphQL, jwt-decode
- Backend: Apollo server, Express with apollo-server-express, GraphQL, Mongoose, jsonwebtoken, bcrypt
- Dev: nodemon

## Refactoring steps

In order to go from a RESTful setup to a GraphQL setup, the following changes took place:

- Frontend:

  - in App.js: added an apollo server
  - in a new "graphql" folder: added mutations and queries for communication with backend
  - in SignupForm.js, LoginForm.js and SearchBooks.js: replaced calls to the functions in the "API" file by useMutation calls
  - in SavedBooks: replaced the useEffect for userData, by the useQuery call, and replaced calls to the functions in the "API" file by useMutation calls

- Backend:
  - in Server.js: added an apollo server which uses the express server as middleware
  - in auth.js: updated function to work with graphql
  - in a new "Schemas" folder: added typeDefs in index.js
    in a new "Resolvers" folder: added resolver functions with correct syntax for apollo server and mongoose models
  - removed routes and controllers folders at the end

## Contact me

If you have any questions about this application, feel free to get in touch by sending me an [email](mailto:amelie.pira@gmail.com).

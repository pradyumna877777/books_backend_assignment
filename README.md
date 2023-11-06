Book Management API

This is a simple Node.js application that provides an API for managing books. It uses Express.js for routing and Mongoose for interacting with a MongoDB database. You can use this application as a starting point for building your own book management system.

Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js installed
Getting Started

Clone this repository to your local machine:

git clone https://github.com/your-username/book-management-api.git

Change to the project directory using:

cd books_backend

Install the project dependencies:

npm install

Create a .env file in the project root and configure your MongoDB connection. For example:

env

MONGODB_URI=mongodb://localhost/your-database-name


Start the application:

npm start
The application will be available at http://localhost:3000. You can change the port by setting the PORT environment variable in your .env file.

API Endpoints
GET /listBooks Get a list of all books.
GET /findBook/:id: Get a book by its ID.
POST /addBook Create a new book.
PUT /editBook/:id: Update a book by its ID.
DELETE /deleteBook/:id: Delete a book by its ID.


Usage
You can use tools like Postman or curl to interact with the API. Here are some example requests:

Get all books:

curl http://localhost:3000/listBooks

Get a book by ID:

curl http://localhost:3000/findBook/your-book-id

Create a new book:

curl -X POST -H "Content-Type: application/json" -d '{"title": "Book Title", "author": "Author Name", "summary": "Book Summary"}' http://localhost:3000/addBook

Update a book by ID:

curl -X PUT -H "Content-Type: application/json" -d '{"title": "New Title"}' http://localhost:3000/editBook/your-book-id

Delete a book by ID:

curl -X DELETE http://localhost:3000/deleteBook/book-id

Acknowledgments
This application was built with Node.js and Express.js.
Data is stored in a MongoDB database using Mongoose.
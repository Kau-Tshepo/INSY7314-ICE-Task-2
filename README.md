# INSY7314 ICE Task 2 – Structured Backend API Development with Express

**Student Name:** Tshepo Kau  
**Student Number:** ST10454055  
**Module:** INSY7314 – Information Systems 3D  

## Project Overview

This project is a structured backend API developed using Node.js and Express.js for INSY7314 ICE Task 2.

The API manages a temporary in-memory collection of books. The project demonstrates the use of routes, controllers, middleware, input validation, controlled Cross-Origin Resource Sharing (CORS), and central error handling.

Each book contains the following attributes:

- `id`
- `title`
- `author`
- `genre`
- `year`

## Project Structure

```text
INSY7314_ICE2_TshepoKau/
│
├── controllers/
│   └── bookController.js
│
├── middleware/
│   ├── errorHandler.js
│   └── validateBookInput.js
│
├── routes/
│   └── bookRoutes.js
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## Technologies Used

- Node.js
- Express.js
- JavaScript
- CORS
- Postman
- Git and GitHub

## Running the API

Install the required dependencies:

```bash
npm install
```

Start the server:

```bash
node index.js
```

The server runs on:

```text
http://localhost:4000
```

## API Routes and Endpoints

### 1. Root Route

**Method:** GET

```text
http://localhost:4000
```

This route confirms that the Books API is accessible.

### 2. Health Route

**Method:** GET

```text
http://localhost:4000/health
```

This route checks whether the server is running successfully.

### 3. Get All Books

**Method:** GET

```text
http://localhost:4000/api/books
```

This route returns all books currently stored in the temporary in-memory collection.

### 4. Get Book by ID

**Method:** GET

```text
http://localhost:4000/api/books/b1
```

This route returns a specific book using its ID.

Example:

```text
GET http://localhost:4000/api/books/b1
```

### 5. Add a New Book

**Method:** POST

```text
http://localhost:4000/api/books
```

The request body must contain:

- `id`
- `title`
- `author`
- `genre`
- `year`

The `year` attribute must contain a numeric value.

## Sample POST Request Bodies

The following five books were added to the temporary in-memory collection during Postman testing.

### Book 1

```json
{
    "id": "b3",
    "title": "Piranesi",
    "author": "Susanna Clarke",
    "genre": "Fantasy",
    "year": 2020
}
```

### Book 2

```json
{
    "id": "b4",
    "title": "Never Let Me Go",
    "author": "Kazuo Ishiguro",
    "genre": "Science Fiction",
    "year": 2005
}
```

### Book 3

```json
{
    "id": "b5",
    "title": "The Three-Body Problem",
    "author": "Liu Cixin",
    "genre": "Science Fiction",
    "year": 2008
}
```

### Book 4

```json
{
    "id": "b6",
    "title": "The Road",
    "author": "Cormac McCarthy",
    "genre": "Post-Apocalyptic Fiction",
    "year": 2006
}
```

### Book 5

```json
{
    "id": "b7",
    "title": "The Silent Patient",
    "author": "Alex Michaelides",
    "genre": "Psychological Thriller",
    "year": 2019
}
```

## Input Validation Testing

Input validation is performed before a new book is passed to the controller.

### Missing Required Field

The following request deliberately excludes the `title` attribute:

```json
{
    "id": "b8",
    "author": "Stephen King",
    "genre": "Horror",
    "year": 1977
}
```

Expected response:

```text
400 Bad Request
```

```json
{
    "message": "All fields are required: id, title, author, genre and year"
}
```

### Invalid Year Data Type

The following request provides the year as a string instead of a number:

```json
{
    "id": "b8",
    "title": "The Shining",
    "author": "Stephen King",
    "genre": "Horror",
    "year": "1977"
}
```

Expected response:

```text
400 Bad Request
```

```json
{
    "message": "Year must be a number"
}
```

## Additional Error Handling Test

A request for a book ID that does not exist returns a `404 Not Found` response.

Example:

```text
GET http://localhost:4000/api/books/b99
```

Response:

```json
{
    "message": "Book not found"
}
```

## CORS Configuration

Controlled Cross-Origin Resource Sharing is configured to allow requests from:

```text
http://localhost:3000
```

The API allows the following HTTP methods:

```text
GET
POST
```

## Error Handling

The project contains central error-handling middleware for handling unexpected application errors and returning an appropriate HTTP response.

## Testing

The API routes and input-validation checks were tested using Postman.

The following HTTP status codes were observed during testing:

- `200 OK` – successful GET requests
- `201 Created` – successful creation of a new book
- `400 Bad Request` – invalid input
- `404 Not Found` – requested book could not be found

## GitHub Repository

The backend API source code is available from my personal GitHub repository:

**GitHub Repository:** [ADD YOUR GITHUB REPOSITORY LINK HERE]
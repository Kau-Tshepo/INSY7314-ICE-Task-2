// Import Express and create a router
const express = require("express");
const router = express.Router();

// Import controller functions
const {
    getAllBooks,
    getBookById,
    addBook
} = require("../controllers/bookController");

const validateBookInput = require("../middleware/validateBookInput");

// GET /api/books
// Returns all books
router.get("/", getAllBooks);

// GET /api/books/:id
// Returns one book using its ID
router.get("/:id", getBookById);

// POST /api/books
// Adds a new book to the temporary in-memory collection
router.post("/", validateBookInput, addBook);

module.exports = router;
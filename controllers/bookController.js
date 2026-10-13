// Temporary in-memory collection of books
// Each book contains at least five attributes, including its ID.
let books = [
    {
        id: "b1",
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        year: 1949
    },
    {
        id: "b2",
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        year: 1937
    }
];

// Get all books
const getAllBooks = (req, res) => {
    res.status(200).json(books);
};

// Get a single book using its ID
const getBookById = (req, res) => {
    const book = books.find((item) => item.id === req.params.id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    res.status(200).json(book);
};

// Add a new book to the temporary in-memory collection
const addBook = (req, res) => {
    const newBook = {
        id: req.body.id,
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        year: req.body.year
    };

    books.push(newBook);

    res.status(201).json({
        message: "Book added successfully",
        book: newBook
    });
};

module.exports = {
    getAllBooks,
    getBookById,
    addBook
};
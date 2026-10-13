// Middleware used to validate data before a new book is added
const validateBookInput = (req, res, next) => {
    const { id, title, author, genre, year } = req.body;

    // Check that all required fields have been provided
    if (!id || !title || !author || !genre || year === undefined) {
        return res.status(400).json({
            message: "All fields are required: id, title, author, genre and year"
        });
    }

    // Check that the year is a number
    if (typeof year !== "number") {
        return res.status(400).json({
            message: "Year must be a number"
        });
    }

    // If validation succeeds, continue to the controller
    next();
};

module.exports = validateBookInput;
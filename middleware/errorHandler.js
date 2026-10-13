// Central error-handling middleware
// Handles unexpected errors from anywhere in the application
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        message: err.message || "Internal Server Error"
    });
};

module.exports = errorHandler;
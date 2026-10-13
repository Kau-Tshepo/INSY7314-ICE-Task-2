// Import Express
const express = require("express");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes");
const errorHandler = require("./middleware/errorHandler");

// Create the Express application
const app = express();

// Define the port
const PORT = 4000;

// Middleware that allows the server to read JSON request bodies
app.use(express.json());

// Controlled Cross-Origin Resource Sharing configuration
const corsOptions = {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
};

app.use(cors(corsOptions));

// Routes for the Books API
app.use("/api/books", bookRoutes);

// Root route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the Books API"
    });
});

// Health route
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Server is running"
    });
});

// Central error-handling middleware
// This must be registered after all routes
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
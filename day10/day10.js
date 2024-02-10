const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Define the directory for serving static files
const publicDirectoryPath = path.join(__dirname, 'public');

// Middleware to serve static files from the "public" directory
app.use(express.static(publicDirectoryPath));

// Route to handle requests to the root ("/")
app.get('/', (req, res) => {
    // Send the "index.html" file as the response
    res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

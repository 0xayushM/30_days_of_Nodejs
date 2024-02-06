const express = require('express');
const app = express();
const port = 3001;

/**
 * Handles GET requests to "/greet" endpoint
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function greetHandler(req, res) {
    // Extract the "name" parameter from the query
    const name = req.query.name || 'Guest';

    // Send the personalized greeting as the response
    res.send(`Hello, ${name}!`);
}

// Define the "/greet" route with the greetHandler function
app.get('/greet', greetHandler);

// Start the Express server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

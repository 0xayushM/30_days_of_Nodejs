const express = require('express');
const app = express();
const port = 3000;
function positiveIntegerHandler(req, res) {
    const number = parseInt(req.query.number);
    if (Number.isInteger(number) && number > 0) {
        // Return success message for a positive integer
        res.send('Success! Provided number is a positive integer.');
    } else {
        // Trigger an error for invalid input
        throw new Error('Invalid input. "number" must be a positive integer.');
    }
}
function errorHandler(err, req, res, next) {
    if (err.message.startsWith('Invalid input')) {
        // Handle specific error type
        res.status(400).send(`Bad Request: ${err.message}`);
    } else {
        // Pass the error to the default Express error handler
        next(err);
    }
}
// Use the positiveIntegerHandler for the "/positive" route
app.get('/positive', positiveIntegerHandler);
// Use the errorHandler for handling errors
app.use(errorHandler);
// Start the Express server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

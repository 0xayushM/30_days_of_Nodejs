// Import the 'fs' module to work with the file system
const fs = require('fs');

// Define a function that reads the content of a file asynchronously
function readFileContent(filePath) {
    // Use fs.readFile to read the file content
    // 'utf8' specifies the encoding for the file content as a string
    // The callback function is executed when the file reading is completed or an error occurs
    fs.readFile(filePath, 'utf8', (err, data) => {
        // Check if there is an error during file reading
        if (err) {
            // Check if the error is due to the file not existing
            if (err.code === 'ENOENT') {
                // Print an error message for 'no such file or directory' error
                console.error(`Error reading file: ${err.code}: ${err.message}`);
            } else {
                // Print a generic error message for other errors
                console.error(`Error reading file: ${err.message}`);
            }
        } else {
            // If there is no error, print the file content to the console
            console.log('File Content:');
            console.log(data);
        }
    });
}
// Test Cases
// Replace these file paths with the actual paths to your test files
readFileContent('test-files/file1.txt');
readFileContent('test-files/empty-file.txt');
readFileContent('test-files/nonexistent-file.txt');

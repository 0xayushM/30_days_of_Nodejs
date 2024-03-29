const path = require('path');

function checkFileExtension(filePath, expectedExtension) {
    // Extract the file extension from the file path
    const actualExtension = path.extname(filePath);

    // Check if the actual extension matches the expected extension
    if (actualExtension === expectedExtension) {
        console.log(`File has the expected extension: ${expectedExtension}`);
    } else {
        console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${actualExtension}`);
    }
}

// Test Cases
checkFileExtension('test-files/file1.txt', '.txt');
checkFileExtension('test-files/resume_ayush.pdf', '.pdf');

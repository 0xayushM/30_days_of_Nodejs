### Problem 1: File Reader

**Problem Statement:**
Create a function `readFileContent(filePath)` that takes the path to a file as input and reads its content asynchronously using the `fs` module. The function should print the content to the console.

**Function Signature:**
```javascript
function readFileContent(filePath) {
    // Implementation
}
```

**Expected Output:**
```
File Content:
This is the content of the file.
Hello, Node.js!
```

**Test Cases:**
```javascript
readFileContent('test-files/file1.txt');
// Expected Output: Content of file1.txt

readFileContent('test-files/empty-file.txt');
// Expected Output: (empty string)

readFileContent('test-files/nonexistent-file.txt');
// Expected Output: Error reading file: ENOENT: no such file or directory...
```

### Solution - [Code](./day1.js)
- Import the 'fs' module to work with the file system
- Define a function that reads the content of a file asynchronously.
- Use fs.readFile to read the file content
- 'utf8' specifies the encoding for the file content as a string
- The callback function is executed when the file reading is completed or an error occurs
- Check if there is an error during file reading
- Check if the error is due to the file not existing
- If there is no error, print the file content to the console

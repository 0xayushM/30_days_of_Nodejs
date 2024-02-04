### Problem 2: File Writer

**Problem Statement:**
Create a function `writeToFile(filePath, content)` that takes the path to a file and user input content as input. The function should write the content to the specified file using the `fs` module.

**Function Signature:**
```javascript
function writeToFile(filePath, content) {
    // Implementation
}
```

**Expected Output:**
```
Data written to output.txt
```

**Test Cases:**
```javascript
writeToFile('test-files/output1.txt', 'Sample content.');
// Expected Output: Data written to output1.txt

writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');
// Expected Output: Error writing to file: ENOENT: no such file or directory...
```

### Solution - [Code](./day2.js)
- Import the `fs` module
- Define the function `writeToFile` that takes a file path and content as parameters
- Use `fs.writeFile` to write the content to the specified file
- Callback function executed after the write operation is completed
- Check if an error occured during the write operation
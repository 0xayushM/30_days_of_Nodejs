### Problem 3: Execute Command

**Problem Statement:**
Create a function `executeCommand(command)` that takes a shell command as input and executes it using the `child_process` module. The function should print the output of the command to the console.

**Function Signature:**
```javascript
function executeCommand(command) {
    // Implementation
}
```

**Expected Output:**
```
Command Output:
File1.txt
File2.txt
```

**Test Cases:**
```javascript
executeCommand('ls -la');
// Expected Output: (output of ls -la)

executeCommand('echo "Hello, Node.js!"');
// Expected Output: Hello, Node.js!
```
### Solution - [Code](./day3.js)

- Import the `exec` function from the `child_process` module
- Define the function to execute a shell command and print its output
- Use `exec` to execute the provided command

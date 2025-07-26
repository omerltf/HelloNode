'use strict';
// Node.js Learning Examples
// Run this file with: node app.js

console.log('=== Welcome to Node.js Learning! ===\n');

// 1. Variables and Data Types
console.log('1. Variables and Data Types:');
var msg = 'Hello World'; // var (function-scoped)
let name = 'Node.js Learner'; // let (block-scoped)
const version = '20.x'; // const (immutable)

console.log('Message:', msg);
console.log('Name:', name);
console.log('Version:', version);
console.log('Type of version:', typeof version);
console.log();

// 2. Functions
console.log('2. Functions:');
function greetUser(userName) {
    return `Hello, ${userName}! Welcome to Node.js`;
}

const addNumbers = (a, b) => a + b; // Arrow function

console.log(greetUser('Developer'));
console.log('5 + 3 =', addNumbers(5, 3));
console.log();

// 3. Arrays and Objects
console.log('3. Arrays and Objects:');
const fruits = ['apple', 'banana', 'orange'];
const person = {
    name: 'John',
    age: 30,
    isStudent: true
};

console.log('Fruits:', fruits);
console.log('Person:', person);
console.log('First fruit:', fruits[0]);
console.log('Person name:', person.name);
console.log();

// 4. Loops
console.log('4. Loops:');
console.log('For loop - counting:');
for (let i = 1; i <= 3; i++) {
    console.log(`Count: ${i}`);
}

console.log('For...of loop - fruits:');
for (const fruit of fruits) {
    console.log(`Fruit: ${fruit}`);
}
console.log();

// 5. Node.js Built-in Modules
console.log('5. Node.js Built-in Modules:');

// File System module
const fs = require('fs');
console.log('Current directory contents:');
try {
    const files = fs.readdirSync('.');
    files.forEach(file => console.log('- ' + file));
} catch (error) {
    console.log('Error reading directory:', error.message);
}
console.log();

// OS module
const os = require('os');
console.log('System Information:');
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('Free memory:', Math.round(os.freemem() / 1024 / 1024), 'MB');
console.log();

// Path module
const path = require('path');
console.log('Path utilities:');
console.log('Current file:', __filename);
console.log('Current directory:', __dirname);
console.log('File extension:', path.extname(__filename));
console.log();

// 6. Asynchronous Programming
console.log('6. Asynchronous Programming:');

// Callback example
function fetchDataCallback(callback) {
    setTimeout(() => {
        callback(null, 'Data fetched with callback!');
    }, 1000);
}

// Promise example
function fetchDataPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data fetched with Promise!');
        }, 1000);
    });
}

// Async/await example
async function fetchDataAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data fetched with async/await!');
        }, 1000);
    });
}

// Using callbacks
fetchDataCallback((error, data) => {
    if (!error) {
        console.log('Callback result:', data);
    }
});

// Using Promises
fetchDataPromise().then(data => {
    console.log('Promise result:', data);
});

// Using async/await
async function demonstrateAsync() {
    try {
        const data = await fetchDataAsync();
        console.log('Async/await result:', data);
    } catch (error) {
        console.log('Error:', error);
    }
}

demonstrateAsync();

// 7. Event Emitter
console.log('7. Event Emitter:');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('event', (message) => {
    console.log('Event received:', message);
});

myEmitter.emit('event', 'Hello from EventEmitter!');
console.log();

// 8. Working with JSON
console.log('8. Working with JSON:');
const userData = {
    name: 'Alice',
    skills: ['JavaScript', 'Node.js', 'Express'],
    experience: 2
};

const jsonString = JSON.stringify(userData, null, 2);
console.log('JSON string:');
console.log(jsonString);

const parsedData = JSON.parse(jsonString);
console.log('Parsed back to object:', parsedData.name);
console.log();

// 9. Error Handling
console.log('9. Error Handling:');
try {
    // This will throw an error
    JSON.parse('invalid json');
} catch (error) {
    console.log('Caught error:', error.message);
}

process.on('uncaughtException', (error) => {
    console.log('Uncaught Exception:', error.message);
    process.exit(1); // Exit the process after logging the error
});
});

process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', promise, 'reason:', reason);
});
console.log();

// 10. Process and Environment
console.log('10. Process and Environment:');
console.log('Node.js version:', process.version);
console.log('Platform:', process.platform);
console.log('Command line arguments:', process.argv.slice(2));
console.log('Environment NODE_ENV:', process.env.NODE_ENV || 'not set');
console.log();

// 11. Destructuring and Spread Operator
console.log('11. Destructuring and Spread Operator:');
const coordinates = [10, 20, 30];
const [x, y, z] = coordinates; // Array destructuring
console.log('Coordinates:', { x, y, z });

const profile = { name: 'Sarah', age: 25, city: 'New York' };
const { name: userName, age, city } = profile; // Object destructuring
console.log('Profile:', { userName, age, city });

const newArray = [...fruits, 'grape', 'kiwi']; // Spread operator
console.log('Extended fruits:', newArray);
console.log();

// 12. Higher-Order Functions
console.log('12. Higher-Order Functions:');
const numbers = [1, 2, 3, 4, 5];

// Map - transform each element
const doubled = numbers.map(num => num * 2);
console.log('Doubled numbers:', doubled);

// Filter - select elements that meet criteria
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers);

// Reduce - accumulate values
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum of numbers:', sum);

// Find - get first matching element
const found = numbers.find(num => num > 3);
console.log('First number > 3:', found);
console.log();

// 13. Modules and Exports
console.log('13. Understanding Modules:');
// In Node.js, each file is a module
console.log('Current module filename:', module.filename);
console.log('Module exports object:', typeof module.exports);
console.log('Module loaded:', module.loaded);
console.log();

// 14. Buffer and Streams Basics
console.log('14. Buffer and Streams Basics:');
// Buffer - handle binary data
const buffer = Buffer.from('Hello Node.js', 'utf8');
console.log('Buffer content:', buffer);
console.log('Buffer as string:', buffer.toString());
console.log('Buffer length:', buffer.length);

// Create a simple readable stream
const { Readable } = require('stream');
class SimpleStream extends Readable {
    constructor(options) {
        super(options);
        this.current = 0;
    }
    
    _read() {
        if (this.current < 3) {
            this.push(`Data chunk ${this.current}\n`);
            this.current++;
        } else {
            this.push(null); // End the stream
        }
    }
}

const simpleStream = new SimpleStream();
simpleStream.on('data', (chunk) => {
    console.log('Stream data:', chunk.toString().trim());
});
simpleStream.on('end', () => {
    console.log('Stream ended');
});
console.log();

// 15. Timers and Intervals
console.log('15. Timers and Intervals:');
console.log('Setting up timers...');

// setTimeout - run once after delay
const timeoutId = setTimeout(() => {
    console.log('Timeout executed after 2 seconds');
}, 2000);

// setImmediate - run on next iteration of event loop
setImmediate(() => {
    console.log('Immediate executed');
});

// setInterval - run repeatedly (we'll clear it quickly)
let counter = 0;
const intervalId = setInterval(() => {
    counter++;
    console.log(`Interval tick: ${counter}`);
    if (counter >= 3) {
        clearInterval(intervalId);
        console.log('Interval cleared');
    }
}, 500);
console.log();

// 16. URL and Query String
console.log('16. URL and Query String:');
const url = require('url');
const querystring = require('querystring');

const testUrl = 'https://example.com:3000/path?name=john&age=30#section';
const parsedUrl = url.parse(testUrl, true);
console.log('Parsed URL:', {
    protocol: parsedUrl.protocol,
    host: parsedUrl.host,
    pathname: parsedUrl.pathname,
    query: parsedUrl.query
});

const queryStr = 'name=jane&age=25&city=boston';
const parsedQuery = querystring.parse(queryStr);
console.log('Parsed query string:', parsedQuery);
console.log();

// 17. Crypto Module Basics
console.log('17. Crypto Module Basics:');
const crypto = require('crypto');

// Generate random bytes
const randomBytes = crypto.randomBytes(8).toString('hex');
console.log('Random bytes:', randomBytes);

// Hash a string
const hash = crypto.createHash('sha256');
hash.update('Hello Node.js');
const hashedValue = hash.digest('hex');
console.log('SHA256 hash:', hashedValue);
console.log();

// 18. Working with Dates
console.log('18. Working with Dates:');
const now = new Date();
console.log('Current date:', now.toISOString());
console.log('Local date string:', now.toLocaleDateString());
console.log('Local time string:', now.toLocaleTimeString());

// Date calculations
const futureDate = new Date(now.getTime() + (7 * 24 * 60 * 60 * 1000)); // 7 days from now
console.log('Date in 7 days:', futureDate.toLocaleDateString());
console.log();

// 19. Regular Expressions
console.log('19. Regular Expressions:');
const testString = 'Contact us at support@example.com or info@test.org';
const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const emails = testString.match(emailRegex);
console.log('Found emails:', emails);

const phoneRegex = /\d{3}-\d{3}-\d{4}/;
const phoneTest = '123-456-7890';
console.log('Phone number valid:', phoneRegex.test(phoneTest));
console.log();

// 20. Node.js Best Practices Examples
console.log('20. Node.js Best Practices:');

// Use strict mode
// (already applied globally at the top)

// Environment configuration
const config = {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    debugMode: process.env.DEBUG === 'true'
};
console.log('App configuration:', config);

// Graceful shutdown handling
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('SIGINT received, shutting down gracefully');
    process.exit(0);
});

console.log('Graceful shutdown handlers registered');
console.log();

console.log("🎉 Congratulations! You've covered many Node.js fundamentals!");
console.log('🎉 Congratulations! You\'ve covered many Node.js fundamentals!');
console.log();
console.log('📚 Next Learning Steps:');
console.log('1. Learn Express.js for web applications');
console.log('2. Explore npm packages and package.json');
console.log('3. Build REST APIs');
console.log('4. Learn about databases (MongoDB, PostgreSQL)');
console.log('5. Study authentication and security');
console.log('6. Explore testing with Jest or Mocha');
console.log('7. Learn about deployment and production');
console.log();
console.log('💡 Exercises to try:');
console.log('- Modify variables and see how they affect output');
console.log('- Add your own functions');
console.log('- Create a simple file read/write example');
console.log('- Experiment with async/await patterns');
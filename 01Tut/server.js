// To run the program simply type on terminal => "node ${filename}" eg, node server

// How node differs from vanilla js
// 1. Node runs on a server and not on browser (backend not frontend)
// 2. The console is the terminal window
console.log('hello world');
// 3. global object instead of window object
// console.log(global);
// 4. Has Common Core modules related to servers, operating systems and file systems that we will explore
// 5. CommonJS modules instead of ES6 modules => meaning that we will use 'require' keyword
// 6. Missing some JS APIs like fetch

const os = require('os');
const path = require('path');
// const math = require('./math');     // As math.js is not a Common Core module we have to use './' before its name
const { add, subtract, multiply, divide } = require('./math')

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

console.log(__dirname);     // Gives the directory name we are currently working in 
console.log(__filename);    // Gives the file name we are currently working in

// console.log(path.dirname(__filename));     // Notice that this is same as console.log(__dirname)
// console.log(path.basename(__filename));     // This gives only filename  
// console.log(path.extname(__filename));      // This gives only extension name

// console.log(path.parse(__filename));        // Gives all the information
// console.log(path.parse(__dirname));

// console.log(math.add(45, 91));
console.log(add(45, 91));
console.log(subtract(45, 91));
console.log(multiply(45, 91));
console.log(divide(45, 91).toFixed(6));
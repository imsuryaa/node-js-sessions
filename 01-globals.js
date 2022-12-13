// Globals - These objects are global in nature and available in all modules
// These can used directly in your application without using any imports

// No Window object in Node.js

// List of globals objects - Console, __dirname, __filename, setInterval(), require, process, etc...

console.log('Current directory path --- ' + __dirname)

setInterval(()=> {
    console.log('Hey there, Welcome to Globals Sessions')
}, 3000)
// Node.js file system module allows you to work with the file system on your computer
// Common use - Read, Create, Update, Delete, Rename files
// Default encoding is 'utf-8'

const { readFileSync, writeFileSync } = require("fs");

const firstFile = readFileSync("./mock/nodejs.txt");
const secondFile = readFileSync("./mock/react.txt");

writeFileSync(
  "./mock/result-in-sync.txt",
  `The combination data of two file : ${firstFile}, ${secondFile}`,
  { flag: "a" }
);

// Async functions are available natively in Node and are denoted by the async keyword in their declaration
// They always return a promise

const { readFile, writeFile } = require("fs");

readFile("./mock/nodejs.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const firstResult = result;
  readFile("./mock/react.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const secondResult = result;

    writeFile(
      "./mock/result-in-async.txt",
      `In Async Way --- ${firstResult} and ${secondResult}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('Async way of this file looks good and file data has been saved')
      }
    );
  });
});

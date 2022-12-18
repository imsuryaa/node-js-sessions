// Nodejs implements  CommonJS modules standards
// Module is a simple code/ functionality orgranized in a file which can be re-used thoughout the Node.js application

const names = require('./modules/names')
const tutorial = require('./modules/func')

// console.log(names.nodejs)

tutorial(names.python)
tutorial(names.nodejs)
// Built in modules - OS Module
// No need to specify path while importing
// these modules can be used across the node.js application

const os = require('os')

// gets user info which is present on the system
const userInfo = os.userInfo()

// console.log(userInfo)

const osDetails = {
    name: os.type(),
    release: os.release(),
    uptime: os.uptime()
}

console.log('Current operating system detials---', osDetails)
// The Path module provides a way of working with directories and file paths

// join() - joins the specified paths into one
// basename() - returns the last part of the path
// dirname() - returns directory of the path
// format() - returns a path object into path string

const path = require('path')

console.log('The separator on this platform is ---', path.sep)

const fileDir = path.join('/mock', 'data', 'test.txt')

console.log(fileDir)

const baseName = path.basename(fileDir)
console.log('Base name of the path ---------', baseName)
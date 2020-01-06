const validator = require('validator')
const notesContent = require('./notes')

const notes = notesContent()

console.log(notes)

console.log(validator.isEmail('nissi@example.com'))
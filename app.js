const notesContent = require('./notes')
const chalk = require('chalk')

const notes = notesContent()
console.log(notes)

if (process.argv[2] == 'add') {
    console.log('Adding notes . . .')
} else if (process.argv[2] == 'remove') {
    console.log('removing notes')
}
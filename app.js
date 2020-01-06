const notesContent = require('./notes')
const chalk = require('chalk')
const yargs = require('yargs')

yargs.command({
    command: 'add',
    description: 'Adding new notes',
    handler: function () {
        console.log('Adding new notes...')
    }
})

yargs.command({
    command: 'remove',
    description: 'Removing notes...',
    handler: function () {
        console.log('Removing notes...')
    }
})

yargs.command({
    command: 'list',
    description: 'Listing notes...',
    handler: function () {
        console.log('Listing notes...')
    }
})

yargs.command({
    command: 'list',
    description: 'Listing notes...',
    handler: function () {
        console.log('Listing notes...')
    }
})

console.log(yargs.argv)



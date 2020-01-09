const notesContent = require('./notes')
const chalk = require('chalk')
const yargs = require('yargs')

yargs.command({
    command: 'add',
    description: 'Adding new notes',
    builder: {
        title: {
            describe: 'Note tile',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('title: ', argv.title)
        console.log('body: ', argv.body)
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



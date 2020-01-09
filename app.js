const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes')

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
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    description: 'Removing notes...',
    builder: {
        title: {
            description: 'Note tile',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNotes(argv.title)
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



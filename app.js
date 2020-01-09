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
    handler(argv) {
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
    handler(argv) {
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    description: 'Listing notes...',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    description: 'Reading notes...',
    builder: {
        title: {
            description: 'title of the notes',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

yargs.parse()

// console.log(yargs.argv)



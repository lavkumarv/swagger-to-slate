// Included packages
const cliclopts = require('cliclopts')
const concat = require('concat-stream')
const fs = require('fs')
const minimist = require('minimist')
const util = require('util')

//custom files import
const package = require('./package.json')
const options = require('./src/options.js')
const help = require('./src/help.js')
const convertToMd = require('./src/convert.js')

//get cli arguments
const cliArg = cliclopts(options)
const argv = minimist(process.argv.slice(2), cliArg.options())

// parse options
if (argv.version) {

    // if version command is executed
    var version = require('./package.json').version
    process.stdout.write('version v' + version + '\n')
    process.exit(0)

} else if (argv.help) {

    //if help command is executed
    var pkgInfo = package.name + ' - ' + package.version + '\n'
    process.stdout.write(help(pkgInfo, cliclopts.options()))
    process.exit(0)

} else {

    // read the arguments
    var input = argv.input
    var output = argv.output
    convertToMd(input, output)
    process.exit(0)

}
#!/usr/bin/env node

// Included packages
const cliclopts = require('cliclopts');
const fs = require('fs');
const minimist = require('minimist');

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
    process.stdout.write(help(pkgInfo, cliArg.usage()))
    process.exit(0)

} else {

    var input, output

    // read the arguments
    if(argv.input)
        input = argv._[0]
    else
        input = 'swagger.json'

    if(argv.output)
        output = argv._[1]
        
    convertToMd(input, output)
    process.exit(0)

}
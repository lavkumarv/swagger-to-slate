// This will store the options supported in command line.

var options = [{
        name: 'help',
        abbr: 'h',
        boolean: true,
        help: 'Output usage information',
    },
    {
        name: 'version',
        abbr: 'v',
        boolean: true,
        help: 'Output the version of the tool'
    },
    {
        name: 'input',
        abbr: 'i',
        boolean: true,
        help: 'Input file name with full path (Default file name is swagger.json)',
        Default: './swagger.json'
    },
    {
        name: 'output',
        abbr: 'o',
        boolean: true,
        help: 'Output file name with full path (Default file name is same as input file)',
        Default: './swagger.md'
    }
];

module.exports = options;
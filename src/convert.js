// Included packages
const yaml = require('js-yaml')
const fs = require('fs') 
const Info = require('./objects/info') 
const Path = require('./objects/path') 
const SecurityDefinitions = require('./objects/securityDefinations') 
const ExternalDocs = require('./objects/externalDocs') 

// Wrapper function for the markdown method
function convertToMd(input, output) { 
    
    if (input) {

        // for storing the markdown document
        const mdDoc = [] 

        try {

            // To store the input document in json formate to fetch the values
            var inputDoc 

            // Get the file extension (YAML, JSON) and convert to Json
            var fileType = readFileExtesnion(input) 
            if(fileType == 'json')
                inputDoc = JSON.parse(fs.readFileSync(input, 'utf8'))
            else if(fileType == 'yaml'){
                inputDoc = yaml.safeLoad(fs.readFileSync(input, 'utf8'))
            }
            
            if(!inputDoc)
                throw "Can't read the file: " + input + "\n    Please provide the full path of the files."

            // Output file name
            const outputFile = output || input.replace(/(yaml|json)$/i, 'md')

            // Process info object
            if ('info' in inputDoc) {
                mdDoc.push(Info.parse(inputDoc.info))
            }

            // Process external doc object
            if ('externalDocs' in inputDoc) {
                mdDoc.push(ExternalDocs.parse(inputDoc.externalDocs))
            }

            // Process Security definitions object
            if ('securityDefinitions' in inputDoc) {
                mdDoc.push(SecurityDefinitions.parse(inputDoc.securityDefinitions))
            }

            // Process Paths
            if ('paths' in inputDoc) {
                Object.keys(inputDoc.paths).map(
                    path => mdDoc.push(Path.parse(path, inputDoc.paths[path]))
                ) 
            }

            mdDoc.push(`<!-- Converted with the swagger-to-slate https://github.com/lavkumarv/swagger-to-slate -->\n`)
            
            fs.writeFileSync(outputFile, mdDoc.join('\n')) 
        } catch (e) {
            console.log(e) 
        }
    }

}

function readFileExtesnion(filename){
    return filename.split('.').pop()
}

// Export the function
module.exports = convertToMd 

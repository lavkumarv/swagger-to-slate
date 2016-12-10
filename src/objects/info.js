/**
 * http://swagger.io/specification/#infoObject
**/

// Included objects from swagger
const Contact = require('./contact') 
const License = require('./license') 

// To parse the info object
function parse(info){

    // To store the info object
    const res = [] 

    if (info !== null && typeof info === 'object') {

        if ('title' in info) {
            res.push(`${info.title} \n ${Array(info.title.length + 1).join('=')}`) 
        }

        if ('description' in info) {
            res.push(`${info.description} \n`) 
        }

        if ('version' in info) {
            res.push(`**Version:** ${info.version} \n`) 
        }

        if ('termsOfService' in info) {
            res.push(`**Terms of service:**  \n ${info.termsOfService} \n`) 
        }

        if ('contact' in info) {
            res.push(Contact.parse(info.contact)) 
        }

        if ('license' in info) {
            res.push(License.parse(info.license)) 
        }
    }
    return res.length ? res.join('\n') : null 
}

// Export the parse object
module.exports = parse
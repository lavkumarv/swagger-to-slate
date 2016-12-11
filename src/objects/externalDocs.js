// Default text for external doc
const TEXT = 'Find out more' 

function parse(externalDocs){

    const res = [] 

    // if description and url both are present
    if ('description' in externalDocs && 'url' in externalDocs) {
      res.push(`[${externalDocs.description}](${externalDocs.url}) \n`) 
    } else if ('url' in externalDocs) {
      res.push(`[${TEXT}](${externalDocs.url}) \n`) 
    }

    return res.length ? res.join('\n') : null 
}

module.exports = {parse}
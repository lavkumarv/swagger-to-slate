
// To parse the Responses Object
function parse(responses) {

    const res = [] 
    res.push('**Responses**\n') 
    res.push('| Code | Description |') 
    res.push('| ---- | ----------- |') 

    Object.keys(responses).map(response => {
        res.push(`| ${response} | ${responses[response].description.replace(/[\r\n]/g, ' ') || ''} |`) 
    }) 
    return res.join('\n') 
}

module.exports = parse

// Import the dataTypes objects
const DataTypes = require('./dataTypes') 

function parse(parameters, pathParameters){

    const res = [] 
    res.push('**Parameters**\n') 
    res.push('| Name | Located in | Description | Required | Type |') 
    res.push('| ---- | ---------- | ----------- | -------- | ---- |') 
    
    // Maps the parameters and set values into the parameters value line
    var arr =[]
    arr.concat(pathParameters, parameters).map(keys => {

        if (keys) {

            const line = [] 
            line.push(keys.name || '') 
            line.push(keys.in || '') 

            if ('description' in keys) {
                line.push(keys.description.replace(/[\r\n]/g, ' ')) 
            } else {
                line.push('') 
            }

            line.push(keys.required ? 'Yes' : 'No') 
            line.push('type' in keys
                ? DataTypes(keys.type, keys.format || null)
                : '') 

            res.push(`|${line.map(el => ` ${el} `).join('|')}|`) 
        }
    }) 
    return res.join('\n') 
}

// Export the parse method of parameters object
module.exports = {parse}
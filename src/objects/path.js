// Import objects
const responses = require('./responses') 
const parameters = require('./parameter') 

// Allowed HTTP method
const ALLOWED_METHODS = ['get', 'post', 'put', 'patch', 'delete', 'options'] 

function parse(path, data) {

  const res = [] 
  let pathParameters = null 

  if (path && data) {

    // Make path as a header
    res.push(`### ${path}`) 
    res.push('---') 

    // Check if parameter for path are in the place
    if ('parameters' in data) {
      pathParameters = data.parameters 
    }

    // Go further method by methods
    Object.keys(data).map(method => {

      if (search(method, ALLOWED_METHODS)) {
        // Set method as a subheader
        res.push(`##### ***${method.toUpperCase()}***`) 
        const pathInfo = data[method] 

        // Set summary
        if ('summary' in pathInfo) {
          res.push(`**Summary:** ${pathInfo.summary}\n`) 
        }

        // Set description
        if ('description' in pathInfo) {
          res.push(`**Description:** ${pathInfo.description}\n`) 
        }

        // Build parameters
        if ('parameters' in pathInfo || pathParameters) {
          res.push(`${parameters.parse(pathInfo.parameters, pathParameters)}\n`) 
        }

        // Build responses
        if ('responses' in pathInfo) {
          res.push(`${responses.parse(pathInfo.responses)}\n`) 
        }
      }
    }) 
  }
  return res.length ? res.join('\n') : null 
} 

// To search entry into array
function search(needle, haystack) {
  if (haystack === undefined || haystack === null) return false 
  if (haystack.length) {
    for (let i = 0;  i < haystack.length;  i++) {
      if (needle === haystack[i]) {
        return true 
      }
    }
  }
  return false 
} 

module.exports = {parse}
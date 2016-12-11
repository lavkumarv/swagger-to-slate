const AuthType = {
  basic: 'Basic',
  apiKey: 'API Key',
  oauth2: 'OAuth 2.0'
} 

// To parse the security Definitions
function parse(securityDefinitions) {
    
  // Base block
  const res = [] 
  Object.keys(securityDefinitions).map(type => {
    res.push(`|${securityDefinitions[type].type}|*${AuthType[securityDefinitions[type].type]}*|`) 
    res.push('|---|---| \n') 
  }) 

  if (res.length > 0) {
    res.unshift('# Authentication \n') 
  }

  return res.length ? res.join('\n') : null 
}

// exports
module.exports =  {parse, AuthType}

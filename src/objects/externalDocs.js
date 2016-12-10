const TEXT = 'Info about this' 

module.exports = externalDocs => {

  const res = [] 

  // if description and url both are present
  if ('description' in externalDocs && 'url' in externalDocs) {
    res.push(`[${externalDocs.description}](${externalDocs.url})`) 
  } else if ('url' in externalDocs) {
    res.push(`[${TEXT}](${externalDocs.url})`) 
  }

  return res.length ? res.join('\n') : null 

} 

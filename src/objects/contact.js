/**
 * http://swagger.io/specification/#contactObject
 **/

// To parse the contact object
function parse(contact){
     const res = [] 

   if ('name' in contact) {
     res.push(`${contact.name}  `) 
   }

   if ('url' in contact) {
     res.push(`${contact.url}  `) 
   }

   if ('email' in contact) {
     res.push(`${contact.email}  `) 
   }

   if (res.length > 0) {
     res.unshift('**Contact information:**  ') 
     res.push('') 
   }

   return res.length > 0 ? res.join('\n') : null 
}

// export the function
module.exports = parse
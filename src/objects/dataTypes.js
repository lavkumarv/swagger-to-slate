// JSON of the dataTypes and conversion
const dataTypes = {
  integer: {
    int32: 'integer',
    int64: 'long'
  },
  number: {
    float: 'float',
    double: 'double'
  },
  string: {
    byte: 'byte',
    binary: 'binary',
    date: 'date',
    'date-time': 'dateTime',
    password: 'password'
  }
} 

// Export the datatypes conversion
module.exports = (type, format = null) => {

  // If dataType is present in the above array
  if (type in dataTypes) {

    if (format) {
      return format in dataTypes[type]
        ? dataTypes[type][format]
        : `${type} (${format})` 
    }
    return type 
  }

  // If dataType is not present in the above array return the same type
  if (format) {
    return `${type} (${format})` 
  }
  return type 
} 

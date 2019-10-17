module.exports = function validate(schema, object) {

  let objectKeys = Object.keys(object);

  for (let i = 0; i < objectKeys.length; i++) {
    let key = objectKeys[i];
    
    if(!schema[key]) return false;

    switch (schema[key]) {
      case 'string':
        if (typeof object[key] !== 'string') return false;
        break;

      case 'number':
        if (typeof object[key] !== 'number') return false;
        break;

      case 'array':
        if (!Array.isArray(object[key])) return false;
        break;

      case 'object':
        if (typeof object[key] !== 'object') return false;
        break;

      case 'boolean':
        if (typeof object[key] !== 'boolean') return false;
        break;
    }
  }

  return true;
}
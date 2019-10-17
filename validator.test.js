const validate = require('./validator');

/**
 * Empty schema's
 */
test('an empty schema should validate an empty object', () => {
  let schema = {};
  let object = {};
  expect(validate(schema, object)).toBe(true);
});

test('an empty schema should invalidate an non-empty object', () => {
  let schema = {};
  let object = {
    empty: false
  };
  expect(validate(schema, object)).toBe(false);
});

/**
 * Number
 */

test('an schema with one number should validate an object with one number', () => {
  let schema = {
    amountOfChildren: 'number'
  };
  let object = {
    amountOfChildren: 5
  };

  expect(validate(schema, object)).toBe(true);
});

test('an schema with one number should not validate an object with non-number', () => {
  let schema = {
    amountOfChildren: 'number'
  };
  let object = {
    amountOfChildren: 'cool'
  };

  expect(validate(schema, object)).toBe(false);
});


/**
 * Array
 */

test('an schema with one array should validate an object with one array', () => {
  let schema = {
    children: 'array'
  };
  let object = {
    children: ['a','b','c']
  };

  expect(validate(schema, object)).toBe(true);
});

test('an schema with one array should validate an object with one non-array', () => {
  let schema = {
    children: 'array'
  };
  let object = {
    children: {
      hans: 'groot'
    }
  };

  expect(validate(schema, object)).toBe(false);
});

/**
 * String
 */
test('an schema with one string should validate an object with one string', () => {
  let schema = {
    childrenName: 'string'
  };
  let object = {
    childrenName: 'jimmyIsSlimmy'
  };

  expect(validate(schema, object)).toBe(true);
});

test('an schema with one string should validate an object with one non-string', () => {
  let schema = {
    childrenName: 'string'
  };
  let object = {
    childrenName: true
  };

  expect(validate(schema, object)).toBe(false);
});

/**
 * Object
 */
test('an schema with one object should validate an object with one object', () => {
  let schema = {
    childrenName: 'object'
  };
  let object = {
    childrenName: {
      isJimmyCool: true
    }
  };

  expect(validate(schema, object)).toBe(true);
});

test('an schema with one object should validate an object with one non-object', () => {
  let schema = {
    childrenName: 'object'
  };
  let object = {
    childrenName: 'yes'
  };

  expect(validate(schema, object)).toBe(false);
});


/**
 * Boolean
 */
test('an schema with one boolean should validate an object with one boolean', () => {
  let schema = {
    isJimmyCool: 'boolean'
  };
  let object = {
    isJimmyCool: true 
  };

  expect(validate(schema, object)).toBe(true);
});

test('an schema with one boolean should validate an object with one non-boolean', () => {
  let schema = {
    isJimmyCool: 'boolean'
  };
  let object = {
    isJimmyCool: 'graag' 
  };

  expect(validate(schema, object)).toBe(false);
});

/**
 * Mixed object
 */

test('an schema with multiple attributes should validate an object with the same multiple attributes', () => {
  let schema = {
    isJimmyCool: 'boolean',
    childrenName: 'string',
    age: 'number',
    metaData: 'object'
  };
  let object = {
    isJimmyCool: false,
    childrenName: 'jimmita',
    age: 5,
    metaData: {
      ismailIsCool:true
    }
  };

  expect(validate(schema, object)).toBe(true);
});

test('an schema with multiple attributes should validate an object with different multiple attributes', () => {
  let schema = {
    isJimmyCool: 'boolean',
    childrenName: 'string',
    age: 'number',
    metaData: 'object'
  };
  let object = {
    isJimmyCool2: false,
    childrenName2: 'jimmita',
    age: 5,
    metaData: {
      ismailIsCool:true
    }
  };

  expect(validate(schema, object)).toBe(false);
});
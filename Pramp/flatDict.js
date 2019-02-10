// Given a dictionary dict, write a function flattenDictionary
// that returns a flattened version of it.

function flattenDictionary(obj) {
  let retObj = {};
  function helper(obj, currKeys = []) {
    for (let key in obj) {
      const newCurrKeys = key === '' ? [...currKeys] : [...currKeys, key];
      if (typeof obj[key] === 'object') {
        helper(obj[key], newCurrKeys);
      } else {
        retObj[newCurrKeys.join('.')] = obj[key];
      }
    }
  }
  helper(obj);
  return retObj;
}

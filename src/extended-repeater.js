const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = {}) {
  str = '' + str;
  addition = '' + addition;
  let additionEl = [];
  for(let i = 0; i <= additionRepeatTimes - 1; i++){
    additionEl.push(addition);
  }
  additionStr = additionEl.join(additionSeparator);
  let strArr = [];
  for(let i = 0; i <= repeatTimes - 1; i++){
    strArr.push(`${str}${additionStr}`);
  }
  return strArr.join(separator);
};
  
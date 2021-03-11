const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)){
    return false;
  }
  let res = members.filter(item => typeof item === 'string')
      .map(item => item.toUpperCase().trim())
      .map(item => item.slice(0, 1))
      .sort()
      .join('');
  return res;
};

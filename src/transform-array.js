const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(Object.prototype.toString.call(arr) !== '[object Array]'){
    throw new Error('Input is not an array');
  }
  let cloneArr = arr.slice(0);

  function check(cloneArr){
    if(cloneArr[0] === '--discard-prev' || cloneArr[0] === '--double-prev'){
      cloneArr = check(cloneArr.slice(1));
    }
    if(cloneArr[cloneArr.length - 1] === '--discard-next' || cloneArr[cloneArr.length - 1] === '--double-next'){
      cloneArr = check(cloneArr.slice(0, cloneArr.length - 1));
    }
    for(let i = 0; i < cloneArr.length; i++){
      if(cloneArr[i] === '--discard-next' && (cloneArr[i + 2] === '--double-prev' || cloneArr[i + 2] === '--discard-prev')){
        cloneArr.splice(i, 3);
        cloneArr = check(cloneArr);
      } else if(cloneArr[i] === '--discard-next'){
        cloneArr.splice(i, 2);
        cloneArr = check(cloneArr);
      } else if(cloneArr[i] === '--discard-prev'){
        cloneArr.splice(i - 1, 2);
        cloneArr = check(cloneArr);
      } else if(cloneArr[i] === '--double-next'){
        cloneArr.splice(i, 1, cloneArr[i + 1]);
        cloneArr = check(cloneArr);
      } else if(cloneArr[i] === '--double-prev'){
        cloneArr.splice(i, 1, cloneArr[i - 1]);
        cloneArr = check(cloneArr);
      }
    }
    return cloneArr;
  }
  return check(cloneArr);
};

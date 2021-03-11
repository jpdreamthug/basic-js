const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(arguments.length === 0){
    return 'Unable to determine the time of year!';
  }

  if(Object.prototype.toString.call(date) !== '[object Date]'){
    throw new Error('Input correct date');
  }

  const seasons = {
    winter: [0, 1, 11],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10]
  }
  let month = date.getMonth();

  let seasonsArr = Object.entries(seasons);

  for(let i = 0; i < seasonsArr.length; i++){
    for(let j = 0; j < seasonsArr[i][1].length; j++){
      if(seasonsArr[i][1][j] === month){
        return seasonsArr[i][0];
      }
    }
  }
};

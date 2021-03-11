const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.maxDepth = 0;
    this.actualDepth = 0;
    this.count = 0;
  }
  calculateDepth(arr) {
    this.count++;
    this.actualDepth++;
    if(this.actualDepth > this.maxDepth){
      this.maxDepth = this.actualDepth;
    }
    for(let i = 0; i < arr.length; i++){
      if(arr[i] instanceof Array){
        this.calculateDepth(arr[i]);
      }
      if(i == arr.length - 1){
        this.actualDepth--;
      }
    }
    if(arr.length == 0){
      this.actualDepth--;
    }
    let res = this.maxDepth;
    this.count--;
    if(this.count == 0){
      this.maxDepth = 0;
      this.actualDepth = 0;
    }
    return res;
  }
};
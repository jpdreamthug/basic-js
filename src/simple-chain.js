const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return chainMaker;
  },
  removeLink(position) {
    if(this.chain[position - 1] !== undefined){
      this.chain.splice(position - 1, 1);
      return chainMaker;
    } else{
      this.chain = [];
      throw new Error('No element to remove');
    }
  },
  reverseChain() {
    this.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    let res = this.chain.map(item => item = `( ${item} )`).join('~~');
    this.chain = [];
    return res;
  }
};

module.exports = chainMaker;

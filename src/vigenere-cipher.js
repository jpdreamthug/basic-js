const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabel = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  }

  keyProccessing(message, key){
    let count = Math.round((message.length - key.length) / key.length) + 1;
    let newKey = key.repeat(count);
    newKey = newKey.split('');
    message = message.toUpperCase();
    for(let i = 0; i < message.length; i++){
      if(this.alphabel.indexOf(message[i]) == -1){
        newKey.splice(i, 0, message[i])
      }
    }
    newKey = newKey.slice(0, message.length).join('').toUpperCase();
    return {corMessage: message, newKey: newKey};

  }

  encrypt(message, key) {
    let correctData = this.keyProccessing(message, key),
        corMessage = correctData.corMessage,
        newKey = correctData.newKey,
        encryptArr = [];

    for(let i = 0; i < corMessage.length; i++){
      if(this.alphabel.indexOf(corMessage[i]) != -1){
        let newLetterIndex = (this.alphabel.indexOf(corMessage[i]) + this.alphabel.indexOf(newKey[i])) % 26;
        encryptArr.push(this.alphabel[newLetterIndex]);
      } else{
        encryptArr.push(corMessage[i]);
      }
    }
    if(this.direct){
      return encryptArr.join('');
    } else{
      return encryptArr.reverse().join('');
    }

  }
  decrypt(message, key) {
    let correctData = this.keyProccessing(message, key),
        corMessage = correctData.corMessage,
        newKey = correctData.newKey,
        encryptArr = [];

    for(let i = 0; i < corMessage.length; i++){
      if(this.alphabel.indexOf(corMessage[i]) != -1){
        let newLetterIndex = (this.alphabel.indexOf(corMessage[i]) + 26 - this.alphabel.indexOf(newKey[i])) % 26;
        encryptArr.push(this.alphabel[newLetterIndex]);
      } else{
        encryptArr.push(corMessage[i]);
      }
    }
    if(this.direct){
      return encryptArr.join('');
    } else{
      return encryptArr.reverse().join('');
    }
  }
}

module.exports = VigenereCipheringMachine;

const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(boolean = true) {
    this.boolean = boolean;
    this.arr = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z'
    ];
  }
  encrypt(mes, key) {
    if (arguments.length <= 1 || !mes || !key) {
      throw new Error(`Incorrect arguments!`);
    }
    let upperCaseKey = key.toUpperCase();
    let encodeStr = '';
    let curIndex = 0;

    for (let i = 0; i < mes.length; i += 1) {
      if (this.arr.includes(mes[i].toUpperCase())) {
        let index = 0;
        index += this.arr.findIndex((item) => item === mes[i].toUpperCase());
        index += this.arr.findIndex((item) => item === upperCaseKey[curIndex]);
        if (index > 25) {
          index = index - 26;
        }
        curIndex += 1;
        if (curIndex === upperCaseKey.length) {
          curIndex = 0;
        }
        encodeStr += this.arr.at(index);
      } else {
        encodeStr += mes[i];
      }
    }
    if (this.boolean) {
      return encodeStr;
    } else {
      return encodeStr.split('').reverse().join('');
    }
    
  }
  decrypt(mes, key) {
    if (arguments.length <= 1 || !mes || !key) {
      throw new Error(`Incorrect arguments!`);
    }
    let upperCaseKey = key.toUpperCase();
    let encodeStr = '';
    let curIndex = 0;

    for (let i = 0; i < mes.length; i += 1) {
      if (this.arr.includes(mes[i].toUpperCase())) {
        let index = 0;
        index += this.arr.findIndex((item) => item === mes[i].toUpperCase());
        index -= this.arr.findIndex((item) => item === upperCaseKey[curIndex]);
        if (index < 0) {
          index = index + 26;
        }
        curIndex += 1;
        if (curIndex === upperCaseKey.length) {
          curIndex = 0;
        }
        encodeStr += this.arr.at(index);
      } else {
        encodeStr += mes[i];
      }
    }
    if (this.boolean) {
      return encodeStr;
    } else {
      return encodeStr.split('').reverse().join('');
    }
  }
}


module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};

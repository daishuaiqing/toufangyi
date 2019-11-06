
const CryptoJS = require('crypto-js');
let KEY_STRING = 'efde9ed776df6dfe9bf34d35';
KEY_STRING = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse('efde9ed776df6dfe9bf34d35'))

export function decrypt(rawData) {
  let key = CryptoJS.enc.Hex.parse(KEY_STRING);
  let text0 = CryptoJS.enc.Hex.parse(rawData);
  let text1 = CryptoJS.enc.Base64.stringify(text0);
  let encryptedData = CryptoJS.DES.decrypt(text1, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encryptedData.toString(CryptoJS.enc.Utf8);
}
export function encrypt(plaintText) {
  let key = CryptoJS.enc.Hex.parse(KEY_STRING);
  let encryptedData = CryptoJS.DES.encrypt(plaintText, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encryptedData.ciphertext.toString();
}

export default {
  decrypt, encrypt
}



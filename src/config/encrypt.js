import AES from 'crypto-js/aes';
import { enc } from 'crypto-js';

const secretPassphrase = 'beans-cookers';

export const decryptId = (str) => {
  if (str) {
    const newStr = Array.isArray(str) ? str.join() : str;
    const decodedStr = decodeURIComponent(newStr);
    return AES.decrypt(decodedStr, secretPassphrase).toString(enc.Utf8);
  }
};

export const encryptId = (str) => {
  const ciphertext = AES.encrypt(str, secretPassphrase);
  return encodeURIComponent(ciphertext.toString());
};


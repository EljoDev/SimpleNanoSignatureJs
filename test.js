/*jshint esversion: 10 */
const sign = require('./SimpleNanoSignature');

const hash = "AE87C717236320099C9910648832B4B75A1A35C1A505C34248809DCA0C66DCC5";

const privateKey = "A88C4CC79B5E63687DAEB2E58C3A7F9CE13D81F731C37AF30F21E426475EF70E";

let signature = sign.signBlock(hash, privateKey);  //returns the HEX signature

console.log(signature);

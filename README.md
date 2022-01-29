# SimpleNanoSignatureJs
SimpleNanoSignatureJs is a simple nano signature tool for node Js

Usage :

```javascript
/*jshint esversion: 10 */
const sign = require('./SimpleNanoSignature');

const hash = "AE87C717236320099C9910648832B4B75A1A35C1A505C34248809DCA0C66DCC5";

const privateKey = "960a469218947ea5b4ab2c8fcbeb8285914a6b330ce76c677fa045d9f06f33a4";

let signature = sign.signBlock(hash, privateKey);  //returns the HEX signature

console.log(signature);

```

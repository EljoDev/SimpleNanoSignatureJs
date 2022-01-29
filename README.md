# SimpleNanoSignatureJs
SimpleNanoSignatureJs is a simple nano signature tool for node Js

Installation : 
  you need [blakejs](https://www.npmjs.com/package/blakejs)
  ```
 npm install blakejs
  ```
 or
 download the full github repository
 
 you can edit ```config.json```
  ```
 {
  "nacl": "Path to nacljs",
  "blakejs": "Path to blakejs"
  }
```

Usage :

```javascript
const sign = require('./SimpleNanoSignature');

const hash = "AE87C717236320099C9910648832B4B75A1A35C1A505C34248809DCA0C66DCC5"; //data to sign

const privateKey = "A88C4CC79B5E63687DAEB2E58C3A7F9CE13D81F731C37AF30F21E426475EF70E"; //must be an ed25519 based private key

let signature = sign.signBlock(hash, privateKey);  //returns the HEX signature

console.log(signature);

//expected output is "2A53258319D6C1AE3461550156B6ED54C08B03C965394E87E0A3716699F2872C63B607CD9B1D6EABBD5CF9FFC3413D1DF60D57283CE19108AC2A21E6A72C3E0D"

```

Fully based on the work of [anarkrypto](https://github.com/anarkrypto)\
[Tweet nacl](https://github.com/dchest/tweetnacl-js) forked by [anarkrypto](https://github.com/anarkrypto) [here](https://github.com/anarkrypto/nanodrop/blob/main/src/models/nano-wallet/utils/nacl.js)


Donation for [anarkrypto](https://github.com/anarkrypto) : ```nano_37f4cm1tu94tteodph6xwwnoowhiae3q483kgfwzd75ns7tbp9uknot4qihe```


# pay-lib
A test nodejs demo payment library for disbursing payouts to family or friends

## Requirements

Node 8, 10 or higher

## Installation

Install the package with:

```javascript
npm install --save pay-lib 
# or 
yarn add pay-lib  
```
# Usage

```javascript 
const payLib = require("pay-lib);

#Create an array of object receipents, even if it is just a receipent

const receipents = [
  {
    name: "Tobi",
    amount: 9000000000
  },
  {
    name: "Prosper",
    amount: 4000000000
  },
  {
    name: "Ire",
    amount: 4000000000
  }
];

//Now pass the receipents array to the send method of the paylib disburse property

let paymentIntents = payLib.disburse.send(receipents);

//You can choose to display the response anyhow, here i will log it to the console

console.log(paymentIntents);

//Would return a array objects containing details of each /receipent transactions

//Example response 

[
  {
    "name": "Tobi",
    "amount": 9000000000,
    "isSent": true,
    "sentAt": 1641746707977,
    "id": "PAYLIB-ID2198635",
    "message": "Transaction successful"
  },
  {
    "name": "Prosper",
    "amount": 4000000000,
    "isSent": true,
    "sentAt": 1641746707977,
    "id": "PAYLIB-ID7381044",
    "message": "Transaction successful"
  },
  {
    "name": "Ire",
    "amount": 4000000000,
    "isSent": true,
    "sentAt": 1641746707978,
    "id": "PAYLIB-ID9864517",
    "message": "Transaction successful"
  }
]

```

# Usage
Live test project link coming
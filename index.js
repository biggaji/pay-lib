// const express = require("express");
const payout = require("./lib/payout");
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World from demo payment test libary!');
// });

// app.get('/disburse', async (req,res) => {
//   // use the payment lib here

//   let receipents =  [
//     	{
//       	name: "vhikky",
//         amount: 20000
//       },
//       {
//       	name: "yinka",
//         amount: 90000
//       },
//       {
//       	name: "dolapo",
//         amount: 50000
//       }
//     ];

//     let paymentIntent = await payout.disburse.send(receipents);

//     res.json(paymentIntent);
// });

// app.listen(3000, () => {
//   console.log("Server started on port 3000");
// });

module.exports = payout;
let payout = {
  disburse: {
    send: function(receipents) {
    //   receipent is an array of receivers
    let receipt = {};
    let transactionStatus = false;
    // check if receipent is an empty array
    if (receipents.length === 0) {
        // console.log("No receipents to send payout to.");
        return "No receipents to send payout to";
    };

      try {
            for(let recp in  receipents) {
            receipt.name = receipents[recp].name;
            receipt.amount = receipents[recp].amount;
            receipt.isSent = true;
            receipt.sentAt = Date.now();
            receipt.id = `PAYLIB-ID${Math.floor(Math.random() * 10000000) + 1}`;
            // console.log(`Transaction successful`, receipt);
            transactionStatus = "Transaction Successful with id: " + receipt.id;
        };
      } catch (error) {
          transactionStatus = "Transaction Failed";
          // console.log('Transaction failed', error.message);
      };
      return transactionStatus;
    }
  }
};

module.exports = payout;
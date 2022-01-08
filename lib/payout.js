let payout = {
  disburse: {
    send: function(receipents) {
    //   receipent is an array of receivers
    let receipt = {};
    let transactionStatus = false;
      try {
            for(let recp in  receipents) {
            receipt.name = receipents[recp].name;
            receipt.amount = receipents[recp].amount;
            receipt.isSent = true;
            receipt.sentAt = Date.now();
            receipt.id = `PAYLIB-ID${Math.floor(Math.random() * 10000000) + 1}`;
            console.log(`Transaction successful`, receipt);
            transactionStatus = true;
        };
      } catch (error) {
          transactionStatus = false;
          console.log('Transaction failed', error.message);
      };
      return transactionStatus;
    }
  }
};

module.exports = payout;
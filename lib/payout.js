let payout = {
  disburse: {
    send: function(receipents) {
    // receipent is an array of receivers
    let receipt = [];
    
    // check if receipent is an empty array
    if (receipents.length === 0) {
        throw new Error("No receipents to send payout to");
    };

    // loop through receipent to check for invalid fields
    let r = receipents.length;
    for(let i = 0; i < r; i++) {
      if(!receipents[i].hasOwnProperty("name") || !receipents[i].hasOwnProperty("amount")) {
        throw new Error("The receipent name and amount property must be included");
      };
    };

      try {
          receipents.forEach(element => {
                receipt.push({ name: element.name,
                amount: element.amount,
                isSent: true,
                sentAt: Date.now(),
                id: `PAYLIB-ID${Math.floor(Math.random() * 10000000) + 1}`,
                message: "Transaction successful"
              });
          });

        return receipt;
      } catch (error) {
        throw new Error(`Transaction failed: ${error.message}`);
      };
    }
  }
};

module.exports = payout;
// Let's build upon a previous account object exercise. A bank account is still defined by:

// A name property.
// A balance property, initially set to 0.
// A credit method adding the value passed as an argument to the account balance.
// A describe method returning the account description.
// Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.

class Account {
  constructor(owner) {
    this.owner = owner;
    this.balance = 0;
  }
  description() {
    console.log(`Owner: ${this.owner} has ${this.balance} balance`);
  }
  credit(amount) {
    this.balance += amount;
  }
}

const accountList = [];
// Add 3 accounts to the list
accountList.push(new Account("Sean"));
accountList.push(new Account("Brad"));
accountList.push(new Account("Georges"));

// Credit and describe each account
accountList.forEach((account) => {
  account.balance += 1000;
  console.log(account.description());
});

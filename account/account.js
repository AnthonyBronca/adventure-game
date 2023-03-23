class Bank {

    constructor(accountName, routingNumber, accountNumber, balance) {
        this.accountName = accountName;
        this.routingNumber = routingNumber;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
}



class Account {
    constructor(username, email, hashedpassword, characters = null) {
        this.username = username;
        this.email = email;
        this.password = hashedpassword;
        this.characters = character
        this.bank = null;
    }

    //adds the character to the account
    setCharacter(char) {
        this.characters = char;

    }

    //adds bank info to the account

    setBank(name, routingNum, accountNum, balance) {
        this.bank = new Bank(name, routingNum, accountNum, balance);
    }
}


module.exports = Account
// console.log(Anthony)

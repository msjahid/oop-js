class BankAccount{

    #accountNumber;
    #accountName;
    _balance;

    constructor(accountNumber, accountName, balance){
        this.#accountNumber = accountNumber;
        this.#accountName = accountName;
        this._balance = balance;
    }

    withdraw(amount){
        if(amount > 0 && amount <= this._balance){
            this._balance -= amount;
        }
    }

    deposit(amount){
        if(amount > 0 && amount <= 25000){
            this._balance += amount;
        }
    }

    getBalance(){
        return this._balance;
    }

    getAccountNumber(){
        return this.#accountNumber;
    }

    getAccountName(){
        return this.#accountName;
    }

    toString() {
        return this.#accountNumber + " " + this.#accountName + " " + this._balance;
    }
}
class CurrentAccount extends BankAccount{
    #withdrawlFee = 0.0;
    constructor(accountNumber, accountName, balance, withdrawlFee){
        super(accountNumber, accountName, balance);
        this.#withdrawlFee = withdrawlFee;
    }
    
    withdraw(amount){
        if (amount > 0 && amount + this.#withdrawlFee <= this._balance){
			this._balance = this._balance - amount - this.#withdrawlFee;
        }
    }
}

class CreditCard extends BankAccount{
    #creditLimit = 0;
    constructor(accountNumber, accountName, balance, creditLimit){
        super(accountNumber, accountName, balance);
        this.#creditLimit = creditLimit;
    }
    withdraw(amount){
        if(-this._balance + amount <= this.#creditLimit){
            this._balance = this._balance - amount;
        }
    }
}

a = new BankAccount(100, "Hero Alom", 1000);
b = new CurrentAccount(101, "Moga Alom", 1000, 20.00);
c = new CreditCard(102, "Alom", 0, 50000);
c.withdraw(5001);
c.deposit(2000);
c.withdraw(47000);
console.log(c+" ");
a.deposit(200);
a.withdraw(100);
// a.balance = 1000
b.deposit(10);
b.withdraw(10);
console.log(a+" ");
console.log(b+ " ");
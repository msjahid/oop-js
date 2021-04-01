class BankAccount{

    // private #, protected _, public these are access modifiers
	// We provide data security/safety using these modifiers
	// we enforce "Encapsulation" with these modifiers

// private access modifier initialize
    #accountNumber;
    #accountName;
    #balance;

    constructor(number, name, amount){
        this.#accountNumber = number;
        this.#accountName = name;
        this.#balance = amount;
    }

    // methods provide "Abstraction"	
	// We don't need to know how something works
    withdraw(amount){
        if(amount > 0 && amount <= this.#balance){
            this.#balance -= amount;
        }
    }

    // In python we call functions
	// as methods

    deposit(amount){
        if(amount > 0 && amount <= 25000){
            this.#balance += amount;
        }
    }

    getBalance(){
        return this.#balance;
    }

    getAccountNumber(){
        return this.#accountNumber;
    }

    getAccountName(){
        return this.#accountName;
    }
}
a = new BankAccount(100, "Hero Alom", 1000);
a.deposit(500)
a.withdraw(1000);
console.log(a.getAccountNumber(), a.getAccountName(), a.getBalance());
// console.log(a.accountNumber, a.accountName, a.balance);
// Code is not working because of my attribute are private
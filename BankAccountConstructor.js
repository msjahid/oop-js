class BankAccount{

    //constructor
    constructor(number, name, amount){
        this.accountNumber = number;
        this.accountName = name;
        this.balance = amount;
    }

    withdraw(amount){
        if(amount > 0 && amount <= this.balance){
            this.balance -= amount;
        }
    }

    deposit(amount){
        if(amount > 0 && amount <= 25000){
            this.balance += amount;
        }
    }

    getBalance(){
        return this.balance;
    }
}
//We are instantiating object "a"
//object "a" is an instance of class "BankAccount"
//28 Number line is easier so we have to add Constructor
a = new BankAccount(100, "Hero Alom", 1000);


a.deposit(100);
b = new BankAccount();
b.accountNumber = 101;
b.accountName = "Abul Mal";
b.balance = 2000;
a.withdraw(200);
b.deposit(500);
console.log(a.accountNumber, a.accountName, a.balance);
console.log(b.accountNumber, b.accountName, b.balance);
console.log(a);
console.log(b);
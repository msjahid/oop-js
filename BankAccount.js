class BankAccount{
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
a = new BankAccount();
a.accountName = "Abul Mal";
a.accountId = 101; 
a.balance = 500; 
a.deposit(50);
console.log(a.accountId, a.accountName, a.balance);
console.log(a);

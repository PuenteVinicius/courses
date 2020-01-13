type AccountBank = {
	balance: number,
	deposit: (money: number) => void,
}


let bankAccount: AccountBank = {
	balance: 3456,
	deposit(money :number) {
		this.balance += money
	}
}


type Holder = {
	name: string, 
	accountBank: AccountBank, 
	contacts: string[]
}

let holder: Holder = {
	name: 'Ana Silva',
	accountBank: bankAccount,
	contacts: ['34567890', '98765432']
}

holder.accountBank.deposit(3000)
console.log(holder)
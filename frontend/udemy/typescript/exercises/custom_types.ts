const timeTracker = (hours:number):string => {
	let result: string;
	result = (hours > 8) ? 'Fora do horário' : 'Ponto normal';
	return result;
}

type Employee = {
	supervisors:string[],
	time: (hours: number) => string
}

let employess: Employee = {
	supervisors: ['a', 'b', 'c'],
	time: timeTracker,
}

console.log(employess);
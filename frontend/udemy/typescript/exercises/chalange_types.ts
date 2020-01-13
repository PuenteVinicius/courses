const timeTracker2 = (hours:number):string => {
	let result: string;
	result = (hours > 8) ? 'Fora do horário' : 'Ponto normal';
	return result;
}

var employess2: {
	supervisors:string[],
	time: (hours: number) => string
} = {
	supervisors: ['a', 'b', 'c'],
	time: timeTracker2,
}

console.log(employess2);
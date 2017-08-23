export function summarizeTotal(month) {
	let sumMonth = month.total;

	sumMonth.incomming = getTotal(month.receitas);
	sumMonth.charged = getTotal(month.despesas);
	sumMonth.month = sumMonth.incomming - sumMonth.charged;
	sumMonth.total = sumMonth.accumulated + sumMonth.month;
	
	return sumMonth;
}

function getTotal(array) {

	if(array.length == 0) {
		return 0
	}

	return array.length > 1
		? sum(array)
		: array[0].realized
}

function sum(array) {
	let total = 0;

	array.map(each => {
		total += each.realized
	})

	return total;
}
// using nodejs to run this file
// i.e. node anz_trade_price.js

// Run
main();

function main() {
	var arr = [
		78.41,
		85.18,
		91.09,
		90.57,
		91.02,
		103.61,
		105.88,
		103.77,
		110.13,
		108.89,
		105.09
	];
	tradePrice(arr);

}

function tradePrice(arr) {
	var gainArr = [];
	var equalArr = [];
	var loseArr = [];
	var curr, prev, diff;

	for(var i=1; i<arr.length; i++) {
		curr = arr[i];
		prev = arr[i-1];
		diff = Math.abs(curr - prev);

		if(curr > prev)	{
			gainArr.push(diff);
		} else if(curr == prev) {
			equalArr.push(diff);
		} else if(curr < prev) {
			loseArr.push(diff);	
		}

	} // end loop

	var gainT = gainArr.reduce(mysum);
	var loseT = loseArr.reduce(mysum);

	// output
	console.log(gainT.toFixed(2));
	console.log('-' + loseT.toFixed(2));

}


function mysum(total, item) {
	return total + item;
}

const compositeMidPointFirst = (a, b) => {
	let N = 6;
	let totalSum = 0;
	let newA = 0;
	let oldA = 0;
	let AplusBDividedBy2 = (a + b) / 2;

	let DDF = 0.68199929359;

	do {
		oldA = newA;
		totalSum = 0;
		let deltaX = (b - a) / N;

		for (let i = a + deltaX / 2; i < b; i += deltaX) {
			totalSum += (i / Math.sin(i)) * deltaX;
		}

		newA = totalSum + DDF * (((b - a) * Math.pow(deltaX, 2)) / 24);
		console.log(Math.abs(newA - oldA));
		console.log(N); //  122, 124, 1.3002009660163123,1.3002009758000952 = 0.00000000978378289

		N = N + 2;
	} while (Math.abs(newA - oldA) > 0.000000001);
};

const simpsonsFirst = (a, b) => {
	let N = 6;
	let totalSum = 0;
	let newA = 0;
	let oldA = 0;

	do {
		oldA = newA;
		totalSum = 0;
		let deltaX = (b - a) / N;
		let counter = 0;

		for (let i = a; i < b; i += deltaX) {
			if (counter === N) {
				totalSum += i / Math.sin(i);
			} else if (counter % 2 === 1) {
				totalSum += (i / Math.sin(i)) * 4;
			} else {
				totalSum += (i / Math.sin(i)) * 2;
			}
			counter++;
		}
		totalSum += b / Math.sin(b);
		totalSum = totalSum * (deltaX / 3);
		newA = totalSum;
		N += 2;
		console.log(Math.abs(newA - oldA), N); // 28,30,1.30020130129014 - 1.30020129418160 = 0.0000000071085402
	} while (Math.abs(newA - oldA) > 0.000000001);
};

const simpsonsThirdFirst = (a, b) => {
	let N = 6;
	let totalSum = 0;
	let counter = 0;

	do {
		oldA = newA;
		totalSum = 0;
		counter = 0;
		let deltaX = (b - a) / N;

		for (let i = a; i < b + 0.000000001; i += deltaX) {
			if (counter === 0 || counter === N) {
				value = counter === 0 ? a / Math.sin(a) : b / Math.sin(b);
				console.log(value, " first one or last one ", counter);
			} else if (counter % 3 === 0) {
				value = (i / Math.sin(i)) * 2;
				console.log(value, " multi by 2 ", counter);
			} else {
				value = (i / Math.sin(i)) * 3;
				console.log(value, " multi by 3 ", counter);
			}
			totalSum += value;

			counter++;
		}
		totalSum += b / Math.sin(b);
		totalSum = totalSum * ((3 * deltaX) / 8);
		newA = totalSum;
		N += 3;
		console.log(Math.abs(newA - oldA), N); // 36, 33 , 1.3002012960738196 - 1.300201289427148 = 0.00000000664667166
	} while (Math.abs(newA - oldA) > 0.000000001);
};

const test = (a, b) => {
	let N = 39;
	let totalSum = 0;
	let counter = 0;
	let deltaX = (b - a) / N;

	for (let i = a; i < b + 0.000000001; i += deltaX) {
		if (counter === 0 || counter === N) {
			value = counter === 0 ? a / Math.sin(a) : b / Math.sin(b);
			console.log(value, " first one or last one ", counter);
		} else if (counter % 3 === 0) {
			value = (i / Math.sin(i)) * 2;
			console.log(value, " multi by 2 ", counter);
		} else {
			value = (i / Math.sin(i)) * 3;
			console.log(value, " multi by 3 ", counter);
		}
		totalSum += value;

		counter++;
	}
	totalSum = totalSum * ((deltaX * 3) / 8);
	console.log(totalSum);
	// 28,30,1.30020130129014 - 1.30020129418160 = 0.0000000071085402
};
test(0.52359877559, 1.57079632679);

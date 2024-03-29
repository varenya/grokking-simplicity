function fibo(n: number) {
	const fibTable = new Array<number>(n + 1);
	fibTable[0] = 0;
	fibTable[1] = 1;

	for (let i = 2; i <= n; i++) {
		fibTable[i] = fibTable[i - 1] + fibTable[i - 2];
	}

	return fibTable[n];
}

const n = 13;

console.log(fibo(n));

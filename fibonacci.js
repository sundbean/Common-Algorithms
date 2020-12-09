// This program returns the nth number of the fibonacci sequence.
// The Fibonacci sequence works by starting with 1, 1 and then each sequential number is
// the sum of the previous two. So the first five numbers of the sequence would be 1, 1, 2 (1+1),
// 3 (1+2), 5 (2+3) and so on

const fib = n => {
    if (n <= 2) {
        return 1;
    } else {
        return fib(n-1) + fib(n-2);
    }
}

const fibSequence = n => {
    const result = [];
    for (i = 0; i < n; i++) {
        result.push(fib(i+1));
    }
}
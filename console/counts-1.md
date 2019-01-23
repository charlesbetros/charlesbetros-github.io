### Hit Counts

```javascript
function isPrime(value) {
    // Blazing fast prime check
}

console.time("Primes");
for (var i = 2; i < 1000; i++) {
    if (isPrime(i)) {
        console.count("Primes found"); // <--
    }
}
console.timeEnd("Primes");
```

![Console count](./images/counts.png "Hit counts in the console")

Notes:
Can be called with or without a label.
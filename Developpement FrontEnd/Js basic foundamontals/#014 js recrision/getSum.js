const sum = (n) => n === 0 ? 0 : n + sum(n - 1)
console.log(sum(3))
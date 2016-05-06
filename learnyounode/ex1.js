// console.log(process.argv.slice(2));
console.log(process.argv.slice(2).reduce((a, b) => parseInt(a) + parseInt(b)));

// process.argv.slice(2).reduce((a, b) => a + parseInt(b));

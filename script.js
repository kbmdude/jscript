let loggingMessage = changeContentOfH2("Content of H2");
console.log(loggingMessage);

let num = 20;
num = num.toString();

num = Number.parseFloat(`${num}`);
console.log(`\tValue of number is: ${num}`);
console.log(`Type of num is ${typeof(num)}`)

console.log((1.1 + 1.3) == 2.4)
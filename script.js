// example for using a class
let Lili = new Dog("Lili", 12);
let loggingMessage = changeContent("h2", Lili);
console.log(loggingMessage);

// example for using a runtime defined data structure
let John = {
    name: "John",
    age: "35",
    nationality: "spanish",
    sex: "male"
};

let h3_content = `${John.name} is a ${John.age} years old ${John.nationality} ${John.sex}.`;
changeContent("h3", h3_content);


// magic with numbers and strings
let num = 20;
num = num.toString();
num = Number.parseFloat(`${num}`);
console.log(`\tValue of number is: ${num}`);
console.log(`Type of num is ${typeof(num)}`);
console.log( +(1.1 + 1.3).toFixed(1) === 2.4);

// magic with numbers #2 and strings
let n1_1 = "1.1";
let n1_3 = "1.3";
console.log(
    +((+n1_1) + (+n1_3)).toFixed(1) !== 2.4
);

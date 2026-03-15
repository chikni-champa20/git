let random = Math.random();
let a = prompt("Operand 1: ");
let b = prompt("Operand 2: ");
let c = prompt("Operation: ");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if (random > 0.1){
    //performs correct calculation
    var result = eval(`${a} ${c} ${b}`);
}
else{
    //performs wrong calculation
    c = obj[c];
    var result = eval(`${a} ${c} ${b}`);
}

console.log(`The result is: ${result}`);
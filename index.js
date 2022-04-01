
var operator = prompt("enter operator");


var firstNumber = prompt("enter first number");
var secondNumber = prompt("enter second number");

if(operator === "add") {
    alert(Number(firstNumber) + Number(secondNumber))
}
else if(operator === "subtract") {
    alert(Number(firstNumber) - Number(secondNumber))
}
else if(operator === "multiply") {
    alert(Number(firstNumber) * Number(secondNumber))
}
else if(operator === "divide") {
    alert(Number(firstNumber) / Number(secondNumber))
}
else {
    alert("operator invalid")
}


var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
var operator = prompt("Enter an operator (+, -, *, /):");

var result;

if (operator == "+") {
  result = +(num1) +  +(num2);
} else if (operator == "-") {
  result = +(num1) -  +(num2);
} else if (operator == "*") {
  result = +(num1) *  +(num2);
} else if (operator == "/") {
  result = +(num1) / +(num2);
} else {
  console.log("Invalid operator");
}

console.log("Result: "  + result )

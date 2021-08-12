var userInput = "23+3-4^";
var operand = "";
var nums = "";

const SEPARATOR = "|";

for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] >= '0' && userInput[i] <= '9') {
        nums += userInput[i] + SEPARATOR;
    } else if (userInput[i] == "+" || userInput[i] == "-" || userInput[i] == "^") {
        operand += userInput[i] + SEPARATOR;
    }
}

console.log("numbers", nums);
console.log("operand", operand);
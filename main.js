const resultP = document.getElementById('result');

const x = Number(prompt("First number"));
const operation = prompt("Operation");
const y = Number(prompt("Second number"));
let result

if(operation == "+" || operation == "-" || operation == "*" || operation == "/") {
    switch (operation) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            result = x / y;
            break;
        
    }
} else {
    alert("Please put in a valid operation!")
}

resultP.innerText = result;

// console.log(typeof(x));
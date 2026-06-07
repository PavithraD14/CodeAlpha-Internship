const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let expression = "";

buttons.forEach(button => {
button.addEventListener("click", () => {

const value = button.textContent;

if(value === "="){
display.textContent = eval(expression);
expression = display.textContent;
}
else if(value === "C"){
expression = "";
display.textContent = "0";
}
else if(value === "CE"){
expression = expression.slice(0,-1);
display.textContent = expression || "0";
}
else if(value === "x²"){
expression = eval(expression) ** 2;
display.textContent = expression;
}
else if(value === "x³"){
expression = eval(expression) ** 3;
display.textContent = expression;
}
else{
expression += value;
display.textContent = expression;   
}

});

});
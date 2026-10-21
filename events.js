function changeColor() {
    document.getElementById("box").style.backgroundColor = "Orange";
}
function resetColor() {
    document.getElementById("box").style.backgroundColor = "Gray";
}
function showText(){
    const input = document.getElementById("textInput");
    const result = document.getElementById("inputResult");
    result.textContent = input.value;
}
function calculate(operation){
    const a = document.getElementById("firstNumber").valueAsNumber;
    const b = document.getElementById("secondNumber").valueAsNumber;
    const output = document.getElementById("calcResult");
    let result;
    if (Number.isNaN(a) || Number.isNaN(b)) {
        output.textContent = "Enter both numbers";
         return;}
    if (operation === "+"){
        result = a + b;
    } else if (operation === "-"){
        result = a - b;
    } else if (operation === "*"){
        result = a * b;
    } else if (operation === "/"){
        if (b === 0){
            output.textContent = "Cannot divide by zero"
            return
        }
        result = a / b;
    }
    output.textContent = "Result: " + result;
}
    
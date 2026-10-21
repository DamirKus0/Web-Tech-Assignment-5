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

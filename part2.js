function changetext() {
    document.getElementById("text").textContent = "A new text";
}
function changeBGcolor() {
    document.getElementById("div").style.backgroundColor = "Grey";
}
function changeFontSize() {
    document.getElementById("div").style.fontSize = "20px";
}
const list = document.getElementById("itemList");

function addItem() {
    list.innerHTML += "<li>New item</li>";
}

function removeItem() {
    if (list.lastElementChild) {
        list.lastElementChild.remove();
    }
}
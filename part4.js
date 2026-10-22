const tasks = [];
function addTask(){
    const input = document.getElementById("taskInput");
    const text = input.value.trim();
    if (text === "") {
        return;
    }
    tasks.push({
        text: text,
        completed: false
    });
    input.value = "";
    displayTasks();
}
function displayTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        const item = document.createElement("li");
        item.innerHTML =
            "<span onclick='toggleTask(" + i + ")'></span> " +
            "<button onclick='removeTask(" + i + ")'>Delete</button>";
        item.querySelector("span").textContent = tasks[i].text;
        if (tasks[i].completed) {
            item.className = "completed";
        }
        list.appendChild(item);
    }
}
function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

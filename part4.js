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
    renderTasks();
}
function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const item = document.createElement("li");
        const text = document.createElement("span");
        const deleteButton = document.createElement("button");

        text.textContent = tasks[i].text;
        text.setAttribute("onclick", "toggleTask(" + i + ")");
        text.style.cursor = "pointer";

        if (tasks[i].completed) {
            text.style.textDecoration = "line-through";
        }

        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("onclick", "deleteTask(" + i + ")");

        item.appendChild(text);
        item.appendChild(deleteButton);
        list.appendChild(item);
    }
}
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

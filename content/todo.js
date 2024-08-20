document.getElementById("add-task").onclick = function() {
    var taskText = document.getElementById("task-input").value;

    if (taskText.trim() !== "") {
        var newTask = document.createElement("li");
        newTask.textContent = taskText;

        document.getElementById("tasks").appendChild(newTask);

        document.getElementById("task-input").value = "";
    }
};

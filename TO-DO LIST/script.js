document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("addTodoBtn");
    const taskInput = document.getElementById("workInput"); 
    const dateInput = document.getElementById("dateInput"); 
    const taskBody = document.getElementById("taskBody");

   function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${task.task}</td>
            <td>${task.date}</td>
            <td><button class="delete-btn bg-red-500 text-white px-2 py-1 rounded-md">Delete</button></td>
            <td>
                <select class="status-dropdown border border-gray-400 bg-gray-700 text-white px-2 py-1 rounded-md appearance-none">
                    <option value="pending" ${task.status === "pending" ? "selected" : ""}>Pending</option>
                    <option value="in-progress" ${task.status === "in-progress" ? "selected" : ""}>In Progress</option>
                    <option value="completed" ${task.status === "completed" ? "selected" : ""}>Completed</option>
                </select>
            </td>
        `;
        taskBody.appendChild(newRow);
    });
}
    function saveTasks() {
        const tasks = Array.from(document.querySelectorAll("#taskBody tr")).map(row => {
            return {
                task: row.cells[0].textContent,
                date: row.cells[1].textContent,
                status: row.cells[3].querySelector("select").value
            };
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    button.addEventListener("click", () => {
        const taskText = taskInput.value; 
        const dateValue = dateInput.value;

        if (taskText.trim() === "" || dateValue.trim() === "") {
            alert("Please enter both task and date!");
            return;
        }

        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${taskText}</td>
            <td>${dateValue}</td>
            <td><button class="delete-btn bg-red-500 text-white px-2 py-1 rounded-md">Delete</button></td>
            <td>
                <select class="status-dropdown border border-black px-2 py-1 rounded-md">
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </td>
        `;

        taskBody.appendChild(newRow);

        saveTasks();

        taskInput.value = "";
        dateInput.value = "";
    });
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete-btn")) {
            event.target.closest("tr").remove();
            saveTasks(); 
        }
    });

    document.addEventListener("change", (event) => {
        if (event.target.classList.contains("status-dropdown")) {
            saveTasks();
        }
    });
    loadTasks();
});

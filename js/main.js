// Selecct key elements from the DOM
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Load tasks from localStorage or start with empty list
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(){
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.textContent = "No tasks yet. Add one 👇";
    emptyMsg.classList.add("empty-state");
    taskList.appendChild(emptyMsg);
    return; }

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task.text;

    if(task.completed){
      span.classList.add("completed");
    }

span.addEventListener("click", () => {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
});

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "❌";

deleteBtn.addEventListener("click", () => {
  li.classList.add("fade-out");

  setTimeout(() => {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }, 300);
});


li.appendChild(span);
li.appendChild(deleteBtn);
taskList.appendChild(li);

  });
}

//2. Add click event to the button
addTaskBtn.addEventListener("click", () => {

//3. Get typed text
const taskText = taskInput.value.trim();

    // 4. prevent empty task
if(taskText === ""){
    alert("Please enter task");
    return;

}

tasks.push({
  text: taskText,
  completed: false
});

saveTasks();
renderTasks();
// Reset input field
taskInput.value ="";
})

// Allow pressing Enter to add a task
taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTaskBtn.click();
  }
});

renderTasks()
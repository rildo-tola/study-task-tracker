const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

//2. Add click event to the button
addTaskBtn.addEventListener("click", () => {

//3. Get typed text
const taskText = taskInput.value.trim();

    // 4. prevent empty task
if(taskText === ""){
    alert("Please enter task");
    return;

}

// 5. Create a new list item
const li =document.createElement("li");

const span = document.createElement("span");
 span.textContent = taskText;

 span.addEventListener("click", () => {
span.classList.toggle("completed");
 });

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "❌";

deleteBtn.addEventListener("click", () => {
    li.remove();
})

li.appendChild(span);
li.appendChild(deleteBtn);
taskList.appendChild(li);

taskInput.value ="";
})

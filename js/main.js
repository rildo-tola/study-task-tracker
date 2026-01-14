// Selecct key elements from the DOM
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

// Task text element
const span = document.createElement("span");
 span.textContent = taskText;

 // Toggle completed state when clicked
 span.addEventListener("click", () => {
span.classList.toggle("completed");
 });

 // Delete button
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "❌";

// Remove task when delete button is clicked
deleteBtn.addEventListener("click", () => {
    li.remove();
})

// Build task item
li.appendChild(span);
li.appendChild(deleteBtn);
taskList.appendChild(li);

// Reset input field
taskInput.value ="";
})

// Allow pressing Enter to add a task
taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTaskBtn.click();
  }
});

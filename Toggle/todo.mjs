export function addTodo(task) {
    const li = document.createElement("li");
    li.innerText = task;
  
    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "❌";
    deleteButton.style.marginLeft = "10px";
    deleteButton.style.cursor = "pointer";
  
    // When clicked, fade out and remove the task
    deleteButton.addEventListener("click", () => {
      li.style.transition = "opacity 0.5s"; // 0.5 seconds fade
      li.style.opacity = 0; // Fade to invisible
  
      setTimeout(() => {
        li.remove(); // Remove after fade
      }, 500); // Wait for fade-out to complete
    });
  
    li.appendChild(deleteButton);
  
    const todoList = document.getElementById("todoList");
    todoList.appendChild(li);
  }
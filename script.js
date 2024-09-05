let addTodo = document.getElementById("add-Todo");
addTodo.addEventListener("click", function () {
  const todoInput = document.getElementById("todo-input");
  const todoText = todoInput.value.trim();

  if (todoText !== "") {
    createTodo(todoText);
    todoInput.value = "";
  }
});

function createTodo(text) {
  const todoList = document.getElementById("todo-list");
  const li = document.createElement("li");
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  li.innerHTML = text;
  removeBtn.addEventListener("click", function(){
    // todoList.removeChild(li);
    li.remove()
  })
  todoList.appendChild(li);
  li.appendChild(removeBtn);
}

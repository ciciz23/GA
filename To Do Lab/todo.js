let toDos = [];

// 1. ADDING TO-DOS

// When the user submits the #to-do-form form:
// - Check if the user has typed something in the input
//   - If yes, add the input value to the to-dos array above
//   - Render the new to-do in the #to-do-list ul
//   - Check the HTML for example to-do list item (commented out)
//   - Update the to-do count next to "My To-Dos" whenever a to-do is added

const toDoForm = document.querySelector("#to-do-form");
toDoForm.addEventListener("submit", addToDo);

const toDoInput = document.querySelector("#to-do-input");

function addToDo(event) {
  event.preventDefault();

  let toDo = toDoInput.value.trim();
  console.log("toDo", toDo);

  if (toDo) {
    toDos.push(toDo);
    updateToDosList();
  }
  console.log("todolist", toDos);

  toDoInput.value = "";
}

const toDoList = document.querySelector("#to-do-list");

function updateToDosList() {
  toDoList.innerHTML = "";

  for (let i = 0; i < toDos.length; i++) {
    console.log("I", i);
    updateToDo(toDos[i]);
  }

  document.querySelector("#to-do-count").innerText = toDos.length;
}

function updateToDo(toDo) {
  let li = document.createElement("li");
  li.classList.add("to-do-item");
  li.innerText = toDo;
  toDoList.appendChild(li);

  li.addEventListener("click", function () {
    completedToDoTest(toDo);
  });
}

// console.log(toDos);

// 2. COMPLETE TO-DOS

// When the user clicks a to-do list item
// - Remove that to-do from the to-do array and list
// - Add that to-do to a completed to-dos array and render that completed list
//     - Check the HTML for example completed to-do list item (commented out)
// - Update the to-do count and completed to-do count in the headings

// When should we attach the event listener for clicking a to-do list item?

let completedToDos = [];
const completedToDolist = document.querySelector("#completed-list");

function completedToDoTest(toDo) {
  completedToDos.push(toDo);
  console.log("completedTodos", completedToDos);

  toDos = toDos.filter((currentToDo) => currentToDo !== toDo);

  updateToDosList();
  updateCompletedToDosList();
}

function updateCompletedToDosList() {
  completedToDolist.innerHTML = "";

  for (completedToDo of completedToDos) {
    updateCompletedToDo(completedToDo);
  }

  document.querySelector("#completed-to-do-count").innerText =
    completedToDos.length;
}

function updateCompletedToDo(completedToDo) {
  let li = document.createElement("li");
  li.classList.add("done-item");
  li.innerText = completedToDo;
  completedToDolist.appendChild(li);
}

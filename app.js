let tasks = [];
let todo = document.querySelector("#todo-add");
let completed = document.querySelector("#completed-add");

let counter = 0;

function AddTask() {
  let getTask = document.querySelector("#todo-input").value;

  var task = {
    id: counter,
    value: getTask,
    statu: 'todo',
  }
  tasks.push(task);
  counter++;
  document.querySelector("#todo-input").value = null;
  ShowTask();
}

function ShowTask() {

  todo.innerHTML = "";
  completed.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].statu == 'todo') {
      todo.innerHTML += `<div class="task">
    <input type="checkbox" name="check" id="check" class="float-left" onclick="ClickCheck(${tasks[i].id})">
    <p class="task-name">${tasks[i].value}</p>
    <button id="btn" onclick="DeleteTask(${tasks[i].id})">
      <i class="fa-regular fa-trash-can icon-red"></i>
    </button>
  </div>`
    }
    else if (tasks[i].statu == 'completed') {
      completed.innerHTML += `<div class="task">
      <p class="task-name">${tasks[i].value}</p>
      <button id="btn" onclick="DeleteTask(${tasks[i].id})">
        <i class="fa-regular fa-trash-can icon-red"></i>
      </button>
      <button id="btn" onclick="NotCompleted(${tasks[i].id})">
        <i class="fa-solid fa-arrow-rotate-left icon-blue"></i>
      </button>
    </div>
    </div>`
    }
  }
}

function ClickCheck(id) {
  var index = tasks.findIndex(x => x.id == id);
  tasks[index].statu = 'completed';
  ShowTask();
}

function DeleteTask(id) {
  var index = tasks.findIndex(x => x.id == id);
  tasks.splice(index,1);
  ShowTask();
}

function NotCompleted(id) {
  var index = tasks.findIndex(x => x.id == id);
  tasks[index].statu = 'todo';
  ShowTask();
}


//enter tuşu algılaması
var input = document.getElementById("todo-input");
input.addEventListener("keyup",function (event){
  if (event.keyCode===13) {
    event.preventDefault();
    document.getElementById("add-btn").click();
  }
})






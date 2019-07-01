var inputNode = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");
var bin = document.getElementById("deleteButton");
var add = document.getElementById("addButton");

inputNode.addEventListener("keyup", event => {
  if (event.key == "Enter") {
    if (inputNode.value != "") {
      addNewTask(inputNode.value);
    }
  }
});

add.addEventListener("click", () => {
  if (inputNode.value != "") {
    addNewTask(inputNode.value);
  }
});

bin.addEventListener("click", event => {
  var removalArray = [];
  taskList.childNodes.forEach((task, index) => {
    if (task.classList.contains("striked")) {
      removalArray.push(taskList.childNodes[index]);
    }
  });
  removalArray.forEach(task => {
    taskList.removeChild(task);
  });
});

var addNewTask = taskString => {
  var node = document.createElement("LI");
  var text = document.createTextNode(taskString);
  node.appendChild(text);
  taskList.appendChild(node);
  inputNode.value = "";
};

document.getElementById("taskList").addEventListener("click", event => {
  var targetTask = event.target;
  if (targetTask.classList.contains("striked")) {
    targetTask.classList.remove("striked");
  } else {
    targetTask.classList.add("striked");
  }
});

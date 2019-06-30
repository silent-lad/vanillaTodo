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
  taskList.childNodes.forEach((task, index) => {
    if (task.classList.contains("striked") != -1) {
      taskList.removeChild(taskList.childNodes[index]);
    }
  });
});

var addNewTask = taskString => {
  var node = document.createElement("LI");
  var text = document.createTextNode(taskString);
  node.appendChild(text);
  node.addEventListener("click", event => {
    var targetTask = event.target;
    targetTask.classList.add("striked");
  });
  taskList.appendChild(node);
  inputNode.value = "";
};

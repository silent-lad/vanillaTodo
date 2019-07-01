let state = [
  {
    todo: "Dance",
    striked: false
  }
];

var render = state => {
  return state.reduce((acc, todo, index) => {
    const classString = todo.striked ? 'class = "striked"' : "";
    return (
      acc + `<li ${classString} data-index="${index}" > ${todo.title} </li>`
    );
  }, "");
};

var paint = () => {
  var html = render(state);
  document.getElementById("taskList").innerHTML = html;
};

document.getElementById("addButton").addEventListener("click", e => {
  const inputText = document.getElementById("taskInput").value;
  state.push({
    title: inputText,
    striked: false
  });
  paint();
});

document.getElementById("taskList").addEventListener("click", e => {
  const index = e.target.dataset.index;
  state[index].striked = !state[index].striked;
  paint();
});

document.getElementById("deleteButton").addEventListener("click", e => {
  state = state.filter(band => !band.striked);
  paint();
});

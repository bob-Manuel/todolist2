const inputBox = document.getElementById("input-box");
let taskContainer = document.getElementById("task-container");
function addTask() {
  if (inputBox.value === "") {
    let placeholder = "Please Add a New Task!!!";
    inputBox.placeholder = placeholder;
    setTimeout(() => {
      inputBox.placeholder = "Add a New Task";
    }, 3000);
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = '<i class="bi bi-trash3"></i>';
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

taskContainer.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      saveData();
    } else if (event.target.tagName === "I") {
      event.target.closest("li").remove();
      saveData();
    }
  },
  false
);

// TO SAVE THE DATA
function saveData() {
  localStorage.setItem("data", taskContainer.innerHTML);
}
function showTask() {
  taskContainer.innerHTML = localStorage.getItem("data");
}
showTask();

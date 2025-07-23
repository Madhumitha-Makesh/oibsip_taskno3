function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = createTaskItem(taskText, false); // false = pending
  document.getElementById("pendingList").appendChild(li);
  taskInput.value = "";
}

function createTaskItem(text, isCompleted) {
  const li = document.createElement("li");
  const date = new Date().toLocaleString();

  li.innerHTML = `
    <input type="checkbox" class="completeCheckbox" ${isCompleted ? "checked" : ""}>
    <span class="taskText">${text}</span>
    <span class="date">(${date})</span>
    <button class="deleteBtn">❌</button>
  `;

  const checkbox = li.querySelector('.completeCheckbox');
  const deleteBtn = li.querySelector('.deleteBtn');

  // handle checkbox click
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      moveToCompleted(li);
    } else {
      moveToPending(li);
    }
  });

  // handle delete
  deleteBtn.addEventListener('click', function() {
    li.remove();
  });

  return li;
}

function moveToCompleted(taskItem) {
  document.getElementById("completedList").appendChild(taskItem);
}

function moveToPending(taskItem) {
  document.getElementById("pendingList").appendChild(taskItem);
}

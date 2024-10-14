let currentTaskItem = null;  

document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('updateTaskBtn').addEventListener('click', updateTask);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value;

  if (taskText === '') {
    alert('タスクをご記入ください');
    return;
  }

  const taskList = document.getElementById('taskList');
  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button class="update-btn">更新</button>
    <button class="delete-btn">削除</button>
  `;

  taskList.appendChild(taskItem);

  taskInput.value = '';

  // Mark task as completed
  taskItem.querySelector('span').addEventListener('click', function () {
    taskItem.querySelector('span').classList.toggle('completed');
  });

  // Update task
  const updateBtn = taskItem.querySelector('.update-btn');
  updateBtn.addEventListener('click', function () {
    editTask(taskItem);
  });

  // Delete task
  const deleteBtn = taskItem.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', function () {
    taskItem.remove();
  });
}

function editTask(taskItem) {
  const taskText = taskItem.querySelector('span').innerText;
  const taskInput = document.getElementById('taskInput');

  taskInput.value = taskText;  
  currentTaskItem = taskItem;  

  document.getElementById('addTaskBtn').style.display = 'none';  
  document.getElementById('updateTaskBtn').style.display = 'inline';  
}

function updateTask() {
  if (currentTaskItem) {
    const taskInput = document.getElementById('taskInput');
    const newTaskText = taskInput.value;

    if (newTaskText === '') {
      alert('Please enter a task');
      return;
    }

    currentTaskItem.querySelector('span').innerText = newTaskText;
    currentTaskItem = null;

    taskInput.value = '';

    document.getElementById('addTaskBtn').style.display = 'inline';
    document.getElementById('updateTaskBtn').style.display = 'none';
  }
}

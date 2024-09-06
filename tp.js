const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

let tasks = [];

addBtn.addEventListener('click', addTask);

function addTask() {
    const task = taskInput.value.trim();
    if (task) {
        tasks.push(task);
        taskInput.value = '';
        taskInput.focus();
        renderTaskList();
    }
}

function renderTaskList() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskListItem = document.createElement('li');
        taskListItem.textContent = task;
        taskList.appendChild(taskListItem);
    });
}

renderTaskList();
const taskInput =
  document.getElementById('taskInput');

const dueDate =
  document.getElementById('dueDate');

const taskList =
  document.getElementById('taskList');

const addBtn =
  document.getElementById('addBtn');

const themeBtn =
  document.getElementById('themeBtn');


// DARK MODE
themeBtn.onclick = function () {

  document.body.classList.toggle('dark');
};


// ADD TASK
addBtn.onclick = function () {

  const taskText = taskInput.value.trim();

  if(taskText === '') {

    alert('Please enter task');
    return;
  }

  createTask(
    taskText,
    dueDate.value
  );

  taskInput.value = '';
  dueDate.value = '';
};


// CREATE TASK
function createTask(text, date) {

  const li =
    document.createElement('li');

  // TASK INFO
  const taskInfo =
    document.createElement('div');

  taskInfo.classList.add('task-info');

  const title =
    document.createElement('strong');

  title.textContent = text;

  const due =
    document.createElement('small');

  due.textContent =
    'Due: ' + (date || 'No Date');

  taskInfo.appendChild(title);
  taskInfo.appendChild(due);

  // BUTTON GROUP
  const btnGroup =
    document.createElement('div');

  btnGroup.classList.add('btn-group');

  // EDIT BUTTON
  const editBtn =
    document.createElement('button');

  editBtn.textContent = 'Edit';

  editBtn.classList.add('edit-btn');

  editBtn.onclick = function () {

    const updated =
      prompt('Edit task', title.textContent);

    if(updated !== null &&
       updated.trim() !== '') {

      title.textContent = updated;
    }
  };

  // DELETE BUTTON
  const deleteBtn =
    document.createElement('button');

  deleteBtn.textContent = 'Delete';

  deleteBtn.classList.add('delete-btn');

  deleteBtn.onclick = function () {

    li.remove();
  };

  // COMPLETE TASK
  title.onclick = function () {

    title.classList.toggle('completed');
  };

  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(deleteBtn);

  li.appendChild(taskInfo);
  li.appendChild(btnGroup);

  taskList.appendChild(li);
}
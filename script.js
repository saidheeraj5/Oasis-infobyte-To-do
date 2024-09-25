function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    // Check if input is not empty
    if (taskInput.value.trim() === '') {
      alert('Please enter a task.');
      return;
    }
  
    // Create a new list item
    const listItem = document.createElement('li');
  
    // Add task text
    listItem.innerText = taskInput.value;
  
    // Create a complete button
    const completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.onclick = function () {
      listItem.classList.toggle('completed');
    };
  
    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.onclick = function () {
      taskList.removeChild(listItem);
    };
  
    // Add buttons to the list item
    listItem.appendChild(completeButton);
    listItem.appendChild(removeButton);
  
    // Add list item to the task list
    taskList.appendChild(listItem);
  
    // Clear the input field
    taskInput.value = '';
  }
  
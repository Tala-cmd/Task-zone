const todoList = [{
    name: 'Make breakfast',
    dueTime: '6:00'
  }, {
    name: 'wash dishes',
    dueTime: '8:00'
  }];
  
  renderTodoList();
  
  function renderTodoList() {
    let todoListHTML = '';
  
    todoList.forEach((todoObject, index) => {
      const { name, dueTime } = todoObject;
      const html = `
      <div class="todo-container">
        <div class="todo-name">${name}</div>
        <div class="todo-time">${dueTime}</div>
        <button class="edit-todo-button"> <i class="ri-edit-fill"> </i></button>
        <button class="delete-todo-button js-delete-todo-button"> <i class="ri-close-circle-fill"> </i></button> 
      </div>
      `;
      todoListHTML += html;
    });
  
    document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML;
  
    document.querySelectorAll('.js-delete-todo-button')
      .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
          todoList.splice(index, 1);
          renderTodoList();
        });
      });
  }
  
  document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
      addTodo();
    });
  
  function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
  
    const timeInputElement = document.querySelector('.js-due-time-input');
    const dueTime = timeInputElement.value;
  
    todoList.push({
      //name: name,
      //dueTime: dueTime,
      name,
      dueTime
    });
  
    inputElement.value = '';
  
    renderTodoList();
  }
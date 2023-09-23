const todoList = [{
    name: 'Make breakfast',
    dueTime: '6:00'
  }, {
    name: 'Wash dishes',
    dueTime: '8:00'
  }];
  
  renderTodoList();
  
  function renderTodoList() {
    let todoListHTML = '';
  
      todoList.forEach((todoObject, index) => {
        const { name, dueTime } = todoObject;
        const html = `
        <div class="todo-container">
        <input class="check-box" type="checkbox">
          <div class="todo-name">${name}</div>
          <div class="todo-time">${dueTime}</div>
          <button class="edit-todo-button js-edit-todo-button"> <i class="ri-edit-fill"> </i></button>
          <button class="delete-todo-button js-delete-todo-button"> <i class="ri-delete-bin-line"></i> </i></button> 
        </div>
        `;
        todoListHTML += html;
    });
  
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    
    document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
          todoList.splice(index, 1);
          renderTodoList();
        });
      });

      document.querySelectorAll('.js-edit-todo-button').forEach((editButton, index) => {
        editButton.addEventListener('click',() => {
        
          const todoContainer = editButton.closest('.todo-container');
          const taskText = todoContainer.querySelector('.todo-name');

          const editInput = document.createElement('input');
          editInput.type = 'text';
          editInput.value = taskText.textContent;
        
          // Replace the task text with the input element
          todoContainer.replaceChild(editInput, taskText);
      
          // Add an event listener to the input for when the user finishes editing
          editInput.addEventListener('blur', () => {
            taskText.textContent = editInput.value;
            todoContainer.replaceChild(taskText, editInput);
        });

        editInput.addEventListener('keydown', (event) => {
          if(event.key==='Enter'){
            taskText.textContent = editInput.value;
            todoContainer.replaceChild(taskText, editInput);
          }
        });
      
        // Focus the input element to start editing
        editInput.focus();
      } )
      })
  }
  
    document.querySelector('.js-add-todo-button').addEventListener('click', () => {
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
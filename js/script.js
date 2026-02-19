/// Temproary data storage for todo items
let todos = [];

/// Function to add a new todo item
function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');

    /// Basic validation to ensure both fields are filled
    if (todoInput.value.trim() === '' || todoDate.value === '') {
        alert('Please enter a todo item and select a due date.');
    } else {
        // Create a new todo object and add it to the todos array
        const newTodo = {
            text: todoInput.value,
            date: todoDate.value
        };

        // Add the new todo to the array
        todos.push(newTodo);

        // Clear the input fields after adding the todo
        todoInput.value = '';
        todoDate.value = '';

        // Display the updated list of todos
        displayTodos();
    }
}

/// Function to render todo items to the DOM
function displayTodos() {
    const todoList = document.getElementById('todo-list');

    // Clear existing list
    todoList.innerHTML = '';

    // Render each todo item
    todos.forEach((todo, _) => {
        todoList.innerHTML += `
        <li>
            <p class="text-2xl">${todo.text} <span class="text-sm text-gray-500">(${todo.date})</span></p>
            <hr />
        </li>`;
    });
}

function deleteAllTodo() {
    // Clear the todos array
    todos = [];
    displayTodos();
}

function filterTodos() { }
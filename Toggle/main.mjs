import { addTodo } from './todo.mjs';

const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = todoInput.value.trim();
  if (task) {
    addTodo(task);
    todoInput.value = '';
  }
});

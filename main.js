// main.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const input = document.getElementById('msg');
  const list = document.getElementById('list');

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const renderTasks = () => {
      list.innerHTML = '';
      tasks.forEach((task, index) => {
          const li = document.createElement('li');
          li.innerHTML = `${task} <button onclick="deleteTask(${index})">Supprimer</button>`;
          list.appendChild(li);
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  form.addEventListener('submit', (e) => {
      e.preventDefault();
      tasks.push(input.value);
      input.value = '';
      renderTasks();
  });

  window.deleteTask = (index) => {
      tasks.splice(index, 1);
      renderTasks();
  };

  renderTasks();


  
});
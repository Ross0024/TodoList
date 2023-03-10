const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const ul = document.querySelector('ul');

// Add task
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.trim() === '') {
      alert('Please enter a task');
      return;
    }
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const span = document.createElement('span');
    span.textContent = input.value;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    ul.appendChild(li);
    input.value = '';
  }); // <-- Added closing parenthesis here

// Delete task
ul.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    e.target.parentElement.remove();
  }
});

// Toggle task
ul.addEventListener('change', (e) => {
  if (e.target.type === 'checkbox') {
    e.target.nextElementSibling.classList.toggle('completed');
  }
});

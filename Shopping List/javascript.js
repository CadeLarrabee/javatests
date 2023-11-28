const btn = document.querySelector('button');
const ul = document.querySelector('ul');
const input = document.querySelector('input');


btn.addEventListener('click', () => {
    const currentInput = input.value;
    input.value = '';

    const liItems = document.createElement('li');
    liItems.classList.add('liItems');

    const span = document.createElement('span');
    span.classList.add('span');
    span.textContent = currentInput;

    const btnDelete = document.createElement('button');
    btnDelete.classList.add('btnDelete');
    btnDelete.textContent = 'Delete';

    btnDelete.addEventListener('click', () => {
        ul.removeChild(liItems);
      });

    liItems.appendChild(span);
    liItems.appendChild(btnDelete);
    ul.appendChild(liItems);

    input.focus();
  });
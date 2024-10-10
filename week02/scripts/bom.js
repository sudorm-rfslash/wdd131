const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul'); // you need to fill in the blank to reference the HTML element that is a unordered list element.

button.addEventListener('click', function () {
  if (input.value.trim() !== '') {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);
    input.focus();
    input.value = '';
    
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
      input.value = '';
    });
  }
});


const nameInput = document.getElementById('name-input');
const changeButton = document.getElementById('button');
const nameDisplay = document.getElementById('name-display');
changeButton.addEventListener('click', () => {
  const name = nameInput.value;
  nameDisplay.textContent = name;
  nameInput.value = '';
});
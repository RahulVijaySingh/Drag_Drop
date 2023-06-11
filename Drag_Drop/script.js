const items = document.querySelectorAll('.item');
let draggedItem = null;

// Event listener for drag start event
items.forEach((item) => {
  item.addEventListener('dragstart', (e) => {
    draggedItem = e.target;
    e.target.classList.add('dragging');
  });
});

// Event listeners for drag over and drop events
const container2 = document.querySelector('#container2');
container2.addEventListener('dragover', (e) => {
  e.preventDefault();
});

container2.addEventListener('drop', (e) => {
  e.preventDefault();
  if (draggedItem) {
    container2.appendChild(draggedItem);
    draggedItem.classList.remove('dragging');
    draggedItem = null;
    displaySuccessMessage();
  }
});

// Reset button event listener
const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', () => {
  const itemList = document.querySelector('#itemList');
  container2.innerHTML = '';
  itemList.innerHTML = `
    <li class="item" draggable="true">Item 1</li>
    <li class="item" draggable="true">Item 2</li>
    <li class="item" draggable="true">Item 3</li>
    <li class="item" draggable="true">Image</li>
  `;
  hideSuccessMessage();
});

function displaySuccessMessage() {
  const successMessage = document.querySelector('#successMessage');
  successMessage.textContent = 'Item dropped successfully!';
  successMessage.style.display = 'block';
}

function hideSuccessMessage() {
  const successMessage = document.querySelector('#successMessage');
  successMessage.style.display = 'none';
}

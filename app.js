const addForm = document.querySelector('.add');
const list = document.querySelector('.todos')
const search = document.querySelector('.search input');

const generateFunc = (todo) => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;
  list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim(); // trim to eliminate white spaces
    if(todo.length) // enters only if there is a valid todo
    {
        generateFunc(todo);
        addForm.reset(); // resets all the input field in ADDFORM
    }
});

// Adding event listeners to every child element is tedious and can dec. the performance
// of our site too
// moreover , if we create a new element then, we need to add a new 
// hence, we use event delegation to attach eventlisteners to every element
// this is much efficient for our performance


// delete todos
 list.addEventListener('click', e => {
    if(e.target.classList.contains('delete'))
    {
        e.target.parentElement.remove();
    }
 });


 const filterTodos = (term) => {
    console.log(term);
    Array.from(list.children)
        .filter(todo => !(todo.textContent.toLowerCase()includes(term)))
        .forEach(todo => todo.classList.toLowerCase()add('filtered'));
    Array.from(list.children)
        .filter(todo => (todo.textContent.includes(term)))
        .forEach(item => item.classList.remove('filtered'));
 };


 // keyup event
 search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
 });

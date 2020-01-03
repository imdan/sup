// Define UI vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
// const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task')
let placeholder = document.getElementById('placeholder');

// load all event listeners

loadEventListeners();

// load all event listeners

function loadEventListeners() {
    // DOM Load
    document.addEventListener('DOMContentLoaded', getTasks);
    // add task event
    form.addEventListener('submit', addTask);

    // remove task event
    taskList.addEventListener('click', removeTask);

    // Clear task event
    clearBtn.addEventListener('click', clearTasks);

    // Filter tasks event

    // filter.addEventListener('keyup', filterTasks);


    // document.addEventListener('DOMContentLoaded', resizeCards);
    // window.addEventListener('resize', resizeCards);

}

// Get Tasks from LS

function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
        placeholder.style.display = 'block';
    } else if (localStorage.getItem('tasks') === "[]"){
        placeholder.style.display = 'block';
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
        placeholder.style.display = 'none';
    }

    tasks.forEach(function(task){
        // Create li element

        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // Create Text Node and append to li
        li.appendChild(document.createTextNode(task));
        // Create New link element
        const link = document.createElement('a');
        // add class
        link.className = 'delete-item secondary-content';
        // add icon
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // append link to li
        li.appendChild(link);
        // append li to ul
        taskList.appendChild(li);
    });
}

// Add task

function addTask(e) {
    if(taskInput.value === ''){
        alert('add a thing!');
    } else {
        // Create li element

        placeholder.style.display = 'none';

        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // Create Text Node and append to li
        li.appendChild(document.createTextNode(taskInput.value));
        // Create New link element
        const link = document.createElement('a');
        // add class
        link.className = 'delete-item secondary-content';
        // add icon
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // append link to li
        li.appendChild(link);
        // append li to ul
        taskList.appendChild(li);

        // Store in local storage

        storeTaskInLocalStorage(taskInput.value);

        // Clear Input
        taskInput.value = '';
    }

    

    e.preventDefault();

}

function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')){

        e.target.parentElement.parentElement.remove();

        removeTaskFromLocalStorage(e.target.parentElement.parentElement);

        if (localStorage.getItem('tasks') === "[]") {
            placeholder.style.display = 'block';
        }
    }
}

// Remove from local storage

function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Tasks

function clearTasks() {
    // taskList.innerHTML = '';

    // faster
    if(confirm('This will delete all of the things from the list.')){
        while(taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }

        
        
    }

    clearTasksFromLocalStorage();
}

// Clear tasks from local storage

function clearTasksFromLocalStorage() {
    localStorage.clear();

        const li = document.createElement('li');
        li.id = 'placeholder';
        li.appendChild(document.createTextNode('no things'));
        // append li to ul
        taskList.appendChild(li);

        placeholder = li;
}

// Filter tasks event

// function filterTasks(e) {
//     const text = e.target.value.toLowerCase();

//     document.querySelectorAll('.collection-item').forEach(function(task){
//         const item = task.firstChild.textContent;
//         if(item.toLowerCase().indexOf(text) != -1) {
//             task.style.display = 'block';
//             placeholder.style.display = 'none';
//         } else  {
//             task.style.display = 'none';
//         }
//     });

//     console.log(text);
// }

// Resize cards

// function resizeCards() {
//     let windowSize = window.innerWidth,
//         cardOne = document.getElementById('card-1'),
//         cardTwo = document.getElementById('card-2'),
//         tileOne = document.getElementById('main');
//         tileTwo = document.getElementById('tile-2');


//     if(windowSize < 894) {
//         cardOne.className = "col s12";
//         cardTwo.className = "col s12";
//         tileOne.style.marginTop = '3rem';
//         tileTwo.style.marginTop = '2rem';
//     } else {
//         cardOne.className = "col s5";
//         cardTwo.className = "col s7";
//         tileOne.style.marginTop = '4rem';
//         tileTwo.style.marginTop = '4rem';
//     }
// }
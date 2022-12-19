window.onload = () => {
    tasks.forEach(item => item.state = "show");
    Task.display();
}

let tasks = [];
const getTasks = localStorage.getItem('tasks');

if (getTasks) tasks = JSON.parse(getTasks);

const input = document.getElementById('task'),
    createBtn = document.getElementById('create-task'),
    search_btn = document.getElementById('search-task'),
    refresh = document.getElementById('refresh'),
    clear__all = document.querySelector('.clear__all');

class Task {
    // display tasks
    static display() {
        const tasks_container = document.getElementById('tasks');
        let _tasks = '';
        tasks.forEach((task) => {
            _tasks += `                                         
                <div class="task-item">
                <button type="button" class="taskcomplete" onclick="Task.todoCompleted('${task.id}')" ><i class= "bi bi-check-circle-fill" ></i></button>
                    <div class="task-name">
                        <p class="${task.completed === 'true' ? 'text-decoration-line-through' : 'text-dark'}" id="task__name">${task.name}</p>
                    </div>
                    <div class="actionbtns">
                    <button type="button" class= "btnedit" onclick="Task.update('${task.id}')"><i class="bi bi-pencil-square"></i></button>
                        <button type="button" class="btndelete"  onclick="Task.delete('${task.id}')"><i class="bi bi-trash" ></i></button>
                    </div>
                </div>
            `;
        });
        (tasks.length === 0 || _tasks === '') ? clear__all.classList.add('d-none') : clear__all.classList.remove('d-none');
        tasks_container.innerHTML = _tasks;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // create task
    static create(task) {
        const generateRandomId = Math.floor(Math.random() * 99999);
        const generateRandomColor = 
        tasks.push({ id: generateRandomId, name: task, completed: 'false', state: 'show', color:'#' + Math.floor(Math.random() * 16777215).toString(16) });
        this.display();
    }

    // completed
    static todoCompleted(task) {
        tasks.forEach(item => {
            if (`${item.id}` === task) {
                if (item.completed === 'false')
                    item.completed = 'true';
                else
                    item.completed = 'false';
            }
        });

        this.display();
    }

    // update/edit task
    static update(task) {
        const taskItems = document.querySelectorAll('.task-item');
        const taskInput = document.getElementById('task-input');
        const edit = document.querySelectorAll('.task-name');

        tasks.forEach((item, index) => {
            if (`${item.id}` === task) {
                taskItems[index].classList.add('task-editing');
                edit[index].innerHTML = `
                    <input type="text" id="task-input" class="form-control" value="${item.name}" placeholder="Edit this Todo and Hit Enter!" title="Edit this Todo and Hit Enter!" />
                    <button type="button" class="save-edited-todo"></button>
                `;

                const taskInputs = document.querySelectorAll('#task-input');
                const saveEditTodo = document.querySelector('.save-edited-todo');
                if (taskInputs) {
                    taskInputs.forEach(input => {
                        input.addEventListener('keydown', e => {
                            if (e.key === 'Enter') {
                                if (input.value === '') showError('.error', 'Edit Field Cannot be Empty!');

                                saveEditTodo.addEventListener('click', e => {
                                    let input_value = input.value;
                                    if (input_value) this.update(task, input_value);
                                });

                                saveEditTodo.click();
                            }
                        });
                    });
                }

                if (taskInput.value === '') return;

                item.name = taskInput.value;
            }
        });

        this.display();
    }

    // delete task
    static delete(task) {
        tasks.forEach((item, index) => {
         if(`${item.id}` === task) {
                 tasks.splice(index, 1)
             }
         });
        this.display();
    }

    
    }


// Create Btn
createBtn.addEventListener('click', (e) => {
    const input_value = input.value;
    if (input_value !== '') {
        input.value = '';
        Task.create(input_value);
    } else {
        showError('.error', 'Cannot Add Todo!');
    }
});



// Prevent from Submit-ing the Form
let form = document.querySelector('.form');
form.addEventListener('submit', e => {
    e.preventDefault();
});

//  Enter Key (To add a Task) 
input.addEventListener('keydown', e => {
    if (e.key === 'Enter') createBtn.click();

});

// Errors Function
function showError(error_place, error_message) {
    const error_container = document.querySelector(error_place);
    if (error_container) {
        error_container.innerHTML = `
            <div class="alert alert-danger error" role="alert">
                ${error_message}
            </div>
        `;
        setTimeout(() => error_container.innerHTML = '', 3000);
    }
}

// Clear All Btn
function clearAll() {
    tasks = [];
    Task.display();
}

clear__all.addEventListener('click', clearAll);

// Refresh Page
refresh.addEventListener('click', () => location.href = location.href);




    



  





let todos = [];
let EditedTodo = -1; 
const getTodos = localStorage.getItem('todos');

if (getTodos) tasks = JSON.parse(getTodos);



/// grab all elements

const form = document.getElementById('todoform');                       
const todoInput= document.getElementById('newtodo'); 
const createBtn = document.getElementById('create-task');
const refresh = document.getElementById('refresh');         
const todolistEl= document.getElementById('todos-list');                
const notificationEl = document.querySelector('.notification')

 // form part 
form.addEventListener("submit", (e) => {
    e.preventDefault();
   
    ToDo.displayData();
    ToDo.create();
   
    //add to storage
  
});

  


class ToDo {
    //display todo
    static displayData (){
        const todolistEl= document.getElementById('todos-list');
        let _todos = '';
        todos.forEach((todo, index) => {                                         
            _todos +=` 
            <div class="todo" id=${index}>
            <button type="button" class="todoComplete"> <i class="bi ${todo.checked === "true" ? 'bi-check-circle-fill' : 'bi-circle' }"
            style="color : ${todo.color}"
            data-action="check"></i></button>
            <div class="task-name">
            <p class="${todo.checked === 'true' ? 'text-decoration-line-through' : 'text-dark'}">${todoInput.value}</p>
            </div>
            <button type="button" class="todo-edit" > <i class="bi bi-pencil-square"></i> </button>
            <button type="button"class="todo-delete"> <i class="bi bi-trash"></i></button>
          </div> `
        });
    
        todolistEl.innerHTML = _todos;
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    ///cretae todo
    static create(todo) {
        const generateRandomId = Math.floor(Math.random() * 99999);
        todos.push({ 
            id:generateRandomId,
            name: todo,
            state: 'show',                                              
            checked: 'false',                                                  
            color: '#' + Math.floor(Math.random() * 16777215).toString(16)
            
        }); 
        this.displayData();                
    }

    static check() {
        todos.forEach(item => {
            if (`${item.id}` === task) {
                if (item.checked === 'false')
                    item.checked = 'true';
                else
                    item.checked = 'false';
            }
        });

        this.displayData();
    }

     // update/edit task
     static update() {
     

}
}
  



    



  




/// grab all elements

const form = document.getElementById('todoform');                       
const todoInput= document.getElementById('newtodo');                     
const todolistEl= document.getElementById('todos-list');                
const notificationEl = document.querySelector('.notification')

///empty array

let todos = JSON.parse(localStorage.getItem('todos'))|| []
let EditedTodo = -1;




///Form submit
form.addEventListener('submit', function(e){                               
    e.preventDefault();
    let id= Math.random()* 10000;
    const todo= new Todo (id, todoInput.value);
    todos= [...todos,todo];
    ToDoList.displayData();
    ToDoList.clearInput();
    
    //saveTOdo(); 
    //renderTOdo();                                                        
    localStorage.setItem('todos', JSON.stringify(todos));
    
})                                                      

/// make object instance
class Todo {
    constructor (id, todo){
        this.id = id;
        this.todo=todo;
        
    }
}                                                      


/// display todo 
class ToDoList {
    static displayData (){
        let displayData = todos.map((todolistEl) =>{
            return `<div class="todo" id="0">
            <i class="bi bi-circle"></i>
            <i class="bi bi-check-circle-fill"></i>
            <p class="">${todolistEl.todo}</p>
            <i class="bi bi-pencil-square"></i>
            <i class="bi bi-trash"></i>
          </div>`
        
        });
        todolistEl.innerHTML=(displayData).join(" ");
    }
    static clearInput(){
        todoInput.value="";
    }
    
   
}






  



  

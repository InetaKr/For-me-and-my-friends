/// Form New todo from htm veiksmai

const form = document.getElementById('todoform');                         //nustatau  form by id
const todoInput= document.getElementById('newtodo');                      //nustatau to do input by id
const todolistEl= document.getElementById('todos-list');                  //nustatau to do-list by id
const notificationEl = document.querySelector('.notification')


let todos = JSON.parse(localStorage.getItem('todos'))|| [];                // to do's  empty array bus supushinta funkcija ir ikelta todo i storage
let EditedTodo = -1;                                                       // global variable, default. if it is not = -1 we editing todo 

/// 1st render 
renderTOdo();


///Form submit
form.addEventListener('submit', function(e){                              /// parasau funkcija 
    e.preventDefault();                                                   //kad nerefeshintu page kiekviena karta po submito

    saveTOdo();                                                           //funkcija ir kad issaugotu naujus to do in page po submito
    renderTOdo();                                                         /// render to user interface
    localStorage.setItem('todos', JSON.stringify(todos));                 ///update storage
});



//save todo funkcijos definition, kuria nurodziau kad vyktu po submito. Ja apsirasau.
/// 1. reikia  kad sita funkcija issaugotu submito value ir 
// 2.kad rodytu ar pachekintas to do list nea
// 3. generuotu spalva 
/// dar pazeti ar todo value yra tuscia ir pasirasyti tam salyga

function saveTOdo(){                                                    //funkcija be parametru naudojama bus array.
    const todoValue= todoInput.value                                    //submito value bus lygi submito inputo value

    const isEmpty = todoValue === ''                                     /// isEmpty lygi tusciai value tikrinsim ar tuscia imputas

    const isDublicate=                                                  ///tikrinam ar todo list imputas pasikartoja
    todos.some((todo)=> todo.value.toUpperCase() === todoValue.toUpperCase()); /// callback function tikrina ar irasyto user imput pasikartoja 

     if(isEmpty){                                                       ///salyga kad tikrunu ar tuscia imputas
        showNotification("Input is empty");                             ///jei tuscia
     }else if(isDublicate){                                             ///jei kartojasi
        showNotification("to do list already exist");
     } else {                                                           ///jei tinkama
        if(EditedTodo >= 0) {                                           ///checking if user editing the todo than need to update the edit todo 
            todos = todos.map((todo, index) => ({                       //looking for todo that has the same index as edited todo in todos array                     
                  ...todo,                                              //copy todo properties (spread operator)
                value : index === EditedTodo ? todoValue : todo.value,  // change a value into new that user wrote in input 
                }));
                EditedTodo = -1;                                         ///setting edited todo to -1, we do that the when user goes write another todo it will be added as new todo and not edited todo
        }else{
            todos.push({ 
            value: todoValue,                                                //1.issaugo submit value
            checked: false,                                                  /// 2. ckeckina false by default
            color: '#' + Math.floor(Math.random() * 16777215).toString(16)   //3.random color
        });                                                                  ///pushina todo  i todos tuscia array
        
        todoInput.value=""                                                   ///input clear
    } 
}}

///renderTOdo function definition 

function renderTOdo(){
    if(todos.length === 0) {                                                 //// funkcija kuri parodo kad nera jokiu todo 
        todolistEl.innerHTML = `<center> Nothing to do !</center>`;
        return;
    }
    /// re render todos
    todolistEl.innerHTML = "";
    //render to do
    todos.forEach((todo, index) => {                                         //callback function, kiekvienam todos idedu innerhtml/add color and data-action
        todolistEl.innerHTML += ` 
        <div class="todo" id=${index}>
          <i class="bi ${todo.checked ? 'bi-check-circle-fill' : 'bi-circle' }"
          style="color : ${todo.color}"
          data-action="check"></i>
          <p class="${todo.checked ? 'checked' : '' }" data-action="check">${todo.value}</p>
          <i class="bi bi-pencil-square" data-action="edit"></i> 
          <i class="bi bi-trash" data-action="delete"></i>
        </div> 
        
        `

    })
}

// CLICK EVENT LISTENER FOR ALL THE TODOS (delete,edit and etc)
todolistEl.addEventListener('click', (e) => {                                    ///click event 
    const target = e.target;
    const parentElement = target.parentNode;                                     ///nustatau ka clickintu koki elementa
  
    if (parentElement.className !== 'todo') return;                             ///tikrina ar clickina ant elemetu kurie turi klase todo, jei ne return
    /// veiksmas toliau vyks tik tada kaip bus clickinta elementas su klase todo
   
    // t o d o id
    const todo = parentElement;                         // naming parent element
    const todoId = Number(todo.id);                     ///accesing object id and converting to number
  
    /// dabar reikia nustatyti kokia icona clikinama ant todo list(check, edit, delete), tam kad nustatytui iconai veiksma... bus pridedama data-atrributte(action) in innerHtml
    
    
    // target action
    const action = target.dataset.action;            // prieinama prie  tam tikro data action 
  
    action === 'check' && checkTodo(todoId);         //jei action lygi check calling function ckeckTodo
    action === 'edit' && editTodo(todoId);           //jei action lygi check calling function editTodo
    action === 'delete' && deleteTodo(todoId);       //jei action lygi check calling function deleteTodo
  });
  
  // CHECK A TODO function
  function checkTodo(todoId) {
    todos = todos.map((todo, index) => ({                       /// running map on the my todos returns new array.callback functions takes parameters of todo itself and its index
      ...todo,                                                  //copy todo properties (spread operator)
      checked: index === todoId ? !todo.checked : todo.checked, //if index = tofo id return not checked otherwise return not checked without changes 
    }));
  
    renderTOdo();                                               //after an action i need to rerender again 
    localStorage.setItem('todos', JSON.stringify(todos));       // update local storagw need to be update after every render
  }
  
  // EDIT A TODO function
  function editTodo(todoId) {
    todoInput.value = todos[todoId].value;                      //todo Input value turi buti lygi naujo todos array yodo id parametro value
    EditedTodo = todoId;                                        ///create a variable that = todoId parametrui 
  }
  
  // DELETE TODO function
  function deleteTodo(todoId) {                                 ///filter the array, takes callback function 
    todos = todos.filter((todo, index) => index !== todoId);    /// returns all the to do except the onr that its index equal to my todo
    EditedTodo = -1;
  
    // re-render
    renderTOdo();
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  
  // SHOW A NOTIFICATION
  function showNotification(msg) {
    // change the message
    notificationEl.innerHTML = msg; 
  
    // notification enter
    notificationEl.classList.add('notif-enter');                 ///add name of the class 
  
    // notification leave
    setTimeout(() => {
      notificationEl.classList.remove('notif-enter');
    }, 2000);
  }
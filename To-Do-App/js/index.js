import { Todo } from "./classes/todo.js";


// Finding Element
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#inputTodo"); 
const todoLists = document.getElementById("lists")
const messageElement = document.querySelector(".message");


// showMessage
const showMessage = (text, status) => {
   messageElement.textContent = text;
   messageElement.classList.add(`bg-${status}`);
   setTimeout(()=>{
      messageElement.textContent = "";
      messageElement.classList.remove(`bg-${status}`);
   }, 1000)
}

// createTodo
 const createTodo = (newTodo) =>{
 const todoElement = document.createElement("li");
 todoElement.id = newTodo.todoId;
 todoElement.classList.add("li-style");
 todoElement.innerHTML = `
  <span> ${newTodo.todoValue} </span>
  <span> <button class="btn" id="deleteButton"> <i class"fa fa-trash"> </i> </button> </span>
 `; 
 todoLists.appendChild(todoElement);

  const deleteButton = todoElement.querySelector("#deleteButton");
   deleteButton.addEventListener("click", deleteTodo)
 };

 //deleteTodo
  const deleteTodo = (event) =>{
  const selectedTodo = event.target.parentElement.parentElement; 
 
   todoLists.removeChild(selectedTodo);
   showMessage("todo is deleted", "danger");

   
   let todos = getTodosFromLocalStorage();
    todos = todos.filter((todo) => todo.todoId !==  selectedTodo.id)

    localStorage.setItem("myTodos", JSON.stringify(todos)
    );

 };

  
  // getTdosFromLocalStorage
 const getTodosFromLocalStorage = () =>{
  return localStorage.getItem("myTodos") ? JSON.parse(localStorage.getItem("myTodos")) : [];
}


// addTodo
const addTodo = (event) =>{
  event.preventDefault();
  const todoValue = todoInput.value;
  

  // unique id
  const todoId = Date.now().toString();

   const newTodo = new Todo(todoId, todoValue);
   console.log(newTodo);

  createTodo(newTodo);
  showMessage("todo is added", "success");
    

   // add todo to localstorage
   const todos = getTodosFromLocalStorage();
   todos.push(newTodo);
   localStorage.setItem("myTodos", JSON.stringify(todos)
   );

   todoInput.value = "";
};
 

    // loadTodos 
     const loadTodos = () => {
       const todos = getTodosFromLocalStorage();
       todos.map((todo) => createTodo(todo));
    };

  
 
    // adding lesteners
todoForm.addEventListener("submit", addTodo);
window.addEventListener("DOMContentLoaded", loadTodos) ;





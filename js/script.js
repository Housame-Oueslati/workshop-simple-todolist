// 1. DOM referenser
const todoList = document.getElementById("todos");
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("input");


// 2. Eventlyssnare - När ett formulär submittas anropa funktion addTodo()
todoForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Hindra sidan från att refresha

    addTodo();
}   );




// 3. Börja med en tom array på todos
// samt ett id som börjar på noll
let todos = [];
let nextId = 0;




// 4. Lägg till en Todo som ett objekt  i arrayen todos
function addTodo() {
    const todoText = todoInput.value.trim();

    // Kolla så att det inte är tomt
    if (todoText !== "") {
        const newTodo = {
            id: nextId,
            text: todoText,
            completed: false
        };
        todos.push(newTodo);
        nextId++;   
        renderList();
        todoInput.value = ""; // Rensa inputfältet
    }    
}



// 5. Funktion som renderar listan på index.html varje gång listan förändraas
function renderList() {
    // Rensa befintliga list-element
    todoList.innerHTML = "";    

    todos.forEach((todo) => {
        const li = document.createElement("li")
        li.textContent = todo.text; 
        todoList.appendChild(li);
        li.dataset.id = todo.id;

        if(todo.completed){
            li.style.textDecoration = "line-through";
        }

        const closeBtn = document.createElement("span");
        closeBtn.textContent = " ×";
        closeBtn.style.color = "red";
        closeBtn.style.cursor = "pointer";
        closeBtn.classList.add("close-btn");
        li.appendChild(closeBtn);

        todoList.appendChild(li);
        
    });

    // Iterera genom varje list-element och skapa en <li></li> med todo-texten, samt en close-knapp

}




// BONUS! Uppdatera eller ta bort en Todo. Använd er av s.k event delegation
todoList.addEventListener('click', function(event) {
        // Element som klickades på i listan
        console.log(event.target);

        // Om man texten klickas => anropa toggleTodoCompletion

        // Eller om close-knappen klickas => anrop deleteTOto

});


// Bonus! Uppdatera en todo med visst id. Toggle "completed"
function toggleTodoCompletion(id) {


}



// Bonus
function deleteTodo(id) {
  
}





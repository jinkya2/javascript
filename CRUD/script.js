console.log(`script js loaded`);

let todoList = [];

function init(){
    document.getElementById("taskinput").focus();
    localStorageInit();
    displaytasks();
}

function localStorageInit(){
    if(window.localStorage){
        if(localStorage.getItem("tasks")){
            let jsonlist = JSON.parse(localStorage.getItem("tasks"));
            todoList.push(...jsonlist);  // concat will not work here
        }else{
            todoList.push("Just do it!");
            localStorage.setItem("tasks", JSON.stringify(todoList));
        }
    }
}

function addtask(){
    if(document.getElementById("taskinput").value == ""){
        return
    }
    todoList.push(document.getElementById("taskinput").value);
    localStorage.setItem("tasks", JSON.stringify(todoList));
    document.getElementById("taskinput").value = "";
    document.getElementById("taskinput").focus();

    displaytasks();
}

function displaytasks(){
    document.getElementById("tasklist").textContent='';
    todoList.forEach((element, index, array)=>{
        let li = document.createElement('LI');
        let span = document.createElement('SPAN');
        span.textContent = element;
        span.setAttribute("id", `task${index}`);
        span.setAttribute("onclick", `editTask(${index})`) // later
        li.appendChild(span);
        let button = document.createElement('BUTTON');
        button.innerHTML = 'X'
        button.setAttribute("id", `delete${index}`);
        button.setAttribute("onclick", `deleteTask(${index})`); // button.onclick = function(x){}
        li.appendChild(button);
        document.getElementById("tasklist").appendChild(li);
    })
}

function editTask(x){
    document.getElementById(`task${x}`).contentEditable=true;
    document.getElementById(`delete${x}`).contentEditable=false;

    // reference [https://www.blustemy.io/detecting-a-click-outside-an-element-in-javascript/]
    document.addEventListener("click", (event)=>{
        const taskElement = document.getElementById(`task${x}`);
        let targetElement = event.target; // clicked element
        do{
            if(targetElement==taskElement){
                return
            }
            targetElement = targetElement.parentNode;
        }while(targetElement)
        // clicked outside
        document.getElementById(`task${x}`).contentEditable=false;
        todoList[x] = document.getElementById(`task${x}`).innerText;
        localStorage.setItem("tasks", JSON.stringify(todoList));
    })
}

function deleteTask(x){
    todoList.splice(x, 1);
    document.getElementById(`task${x}`).remove();
    localStorage.setItem("tasks", JSON.stringify(todoList));
    displaytasks();
}

init();
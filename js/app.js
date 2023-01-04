const addBtn = document.querySelector(".add-btn");
const todoContainer = document.querySelector(".todo-container");
const todoInput = document.querySelector('.todo-input');
const alert = document.querySelector(".alert");
const succeed = document.querySelector(".succeed");
const completedMsg = document.querySelector(".completed-msg")
const delMsg = document.querySelector(".del-msg ")



addBtn.addEventListener("click", (e) => {

    // show message function
    function showMsg(msg){
        msg.classList.remove("remove")
        setTimeout(()=>{
            msg.classList.add("remove")
        },3000)
    }

    e.preventDefault();
    const todoInputValue = todoInput.value;
    console.log(todoInputValue);

    if (todoInputValue.length === 0){
        showMsg(alert);
    } else {
        // create element
        const todoItem = document.createElement("div");
        todoItem.classList.add('todo-item');
        todoContainer.append(todoItem)
        
        const todo = document.createElement("p");
        todo.classList.add("todo");
        todo.append(todoInputValue);

        todoItem.append(todo)
        
        // btns
        const btns = document.createElement("div");
        btns.classList.add('btns');
        
        const check = document.createElement("i")
        check.classList.add("fa-solid", "fa-check");
        const del = document.createElement("i");
        del.classList.add("fa-solid", "fa-trash");
        
        btns.append(check);
        btns.append(del)
        todoItem.append(btns);

        // show message
        succeed.classList.remove("remove")
        setTimeout(()=>{
            succeed.classList.add("remove")
        },3000);

        // completed todo
        let completed = false;
        check.addEventListener("click",()=>{
            if (completed === true) {
                todo.classList.remove('completed');
                completed = false                
            } else {
                todo.classList.add("completed")
                completed = true;
                completedMsg.classList.remove("remove")
                    setTimeout(()=>{
                        completedMsg.classList.add("remove")
                    },3000)
            }
        });

        del.addEventListener("click",()=>{
            todoItem.remove();
            showMsg(delMsg)
        })
    }

    todoInput.value = ''
})
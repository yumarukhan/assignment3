

    const todo = document.getElementById("todoinput");
    const todocontainer = document.getElementById("todocontainer");
    const important = document.getElementById("important");

    function addTodo() {
        if (todo.value === '') {
            alert("Input can not be empty!");
        } else {
            let li = document.createElement("li");
            li.textContent = todo.value;
            
            let spanDash = document.createElement("span");
            spanDash.innerHTML = '<i class="fa-solid fa-minus"></i>';
            
            
            let spanStar = document.createElement("span");
            spanStar.innerHTML = '<i class="fa-solid fa-star"></i>';
                
            li.appendChild(spanDash);
            li.appendChild(spanStar);
            todocontainer.appendChild(li);
            save();
            
        }
        todo.value = "";
        
    }

    todocontainer.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            save();
        } else if (e.target.classList.contains("fa-minus")) {
            e.target.parentElement.parentElement.remove();
            save();
        } 
        else if(e.target.classList.contains("fa-star")){

        }
    }, false);

  



    function save() {
        localStorage.setItem("data", todocontainer.innerHTML);
    
    }
    function save1() {
        localStorage.setItem("important", important.innerHTML);
    
    }

    function display() {
        todocontainer.innerHTML = localStorage.getItem("data");
    }
    function display1() {
        important.innerHTML = localStorage.getItem("important");
}
    
display();
display1();

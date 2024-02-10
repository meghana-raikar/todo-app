const button = document.querySelector("#push");
const input = document.querySelector("#newtask input");
const tasks = document.querySelector("#task");

button.onclick = function () {
  if (input.value.length == 0) {
    alert("enter the task to add in list");
  } else {
    tasks.innerHTML += ` <div class="todo">  
        <span id ="taskname">
            ${input.value}
        </span> 

        <button class="delete"> 
        <i class="fa-solid fa-trash"></i> 
        </button>

         </div> `;

    var deletebutton = document.querySelectorAll(".delete");
    for (let i = 0; i < deletebutton.length; i++) {
      deletebutton[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    var todo = document.querySelectorAll(".todo");

    for (let i = 0; i < todo.length; i++) {
      todo[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }

    input.value = "";
  }
};

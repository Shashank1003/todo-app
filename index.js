let list = document.querySelector(".list");
let todo = document.querySelector("#addTodo");
// alert(todo);
// todo.value = TextNode;



todo.addEventListener("click", function () {
    todo.type = "text";
    todo.value = "";

    let fired = false;

    todo.addEventListener("keydown", function (event) {
        if (fired == false) {
            fired = true;
            if (event.key == "Enter") {
                let newTodo = document.createElement("li");
                let newText = document.createTextNode(todo.value);
                newTodo.appendChild(newText);
                list.appendChild(newTodo);
                todo.type = "button";

            }
        }
    });

    todo.addEventListener("keyup", function () {
        fired = false;
    });
});
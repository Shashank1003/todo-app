var todo = document.getElementById("addTodo");
var todoList = document.getElementById("todoList");
var todoListContainer = document.querySelectorAll("#todoList .box");
var todoListText = document.querySelectorAll("#todoList .text");
var todoListButton = document.querySelectorAll("#todoList .radio");
var todoListCross = document.querySelectorAll("#todoList .cross");
var todoListLi = document.querySelectorAll("#todoList li");
var remainingTasks = document.querySelector(".left");
var lines = document.querySelectorAll("hr");
var fired = false;
var remaining = 5;
document.querySelector(".left").innerHTML = remaining;
// alert("Hello");
// Using count to restart the tick function because of limit issues.
// Using fired for ignoring long key press.
//  Using remaining for items left.

todo.addEventListener("keydown", function (event) {
    if (fired == false) {
        fired = true;
        if (event.key == "Enter") {
            if (todo.value.length == 0) {
                alert("People becoming habitual to doing nothing, get nothing at the end. -Shahenshah Hafeez Khan");
            } else {
                let newText = document.createTextNode(todo.value);
                let newTodo = document.createElement("li");
                let btn = document.createElement("button");
                let containerBox = document.createElement("div");
                let textBox = document.createElement("div");
                let cross = document.createElement("button");
                let radioBox = document.createElement("div");
                let lineHr = document.createElement("hr");

                textBox.appendChild(newText);
                radioBox.appendChild(btn);
                containerBox.appendChild(radioBox);
                containerBox.appendChild(textBox);
                containerBox.appendChild(cross);
                newTodo.appendChild(containerBox);
                newTodo.appendChild(lineHr);
                todoList.appendChild(newTodo);

                containerBox.className = "todoBox";
                newTodo.className = "liItem"
                textBox.className = "task";
                btn.className = "checkBox";
                btn.classList.add("radio");
                containerBox.classList.add("box");
                textBox.classList.add("text");
                btn.value = "on";
                radioBox.className = "radioContainer";
                lineHr.className = "line";
                // btn.innerHTML = "Click";
                cross.className = "cross";
                cross.innerHTML = '<img src="images/icon-cross.svg" alt="cross">';
                remaining++;
                document.querySelector(".left").innerHTML = remaining;

                btn.addEventListener("click", function () {
                    if (btn.value == "on") {
                        btn.value = "off";
                        newTodo.classList.add("liItemChecked");
                        newTodo.classList.remove("liItem");
                        containerBox.classList.add("todoBoxChecked");
                        containerBox.classList.remove("todoBox");
                        btn.classList.add("checkBoxChecked");
                        btn.classList.remove("checkBox");
                        textBox.classList.add("taskChecked");
                        textBox.classList.remove("task");
                        lineHr.classList.add("lineChecked");
                        lineHr.classList.remove("line");
                        btn.innerHTML = '<img src="images/icon-check.svg" alt="check">';
                        remaining--;
                        document.querySelector(".left").innerHTML = remaining;
                    } else {
                        btn.value = "on";
                        newTodo.classList.remove("liItemChecked");
                        newTodo.classList.add("liItem");
                        containerBox.classList.remove("todoBoxChecked");
                        containerBox.classList.add("todoBox");
                        btn.classList.remove("checkBoxChecked");
                        btn.classList.add("checkBox");
                        textBox.classList.remove("taskChecked");
                        textBox.classList.add("task");
                        lineHr.classList.remove("lineChecked");
                        lineHr.classList.add("line");
                        btn.innerHTML = "";
                        remaining++;
                        document.querySelector(".left").innerHTML = remaining;
                    }
                });

                textBox.addEventListener("click", function () {
                    if (btn.value == "on") {
                        btn.value = "off";
                        newTodo.classList.add("liItemChecked");
                        newTodo.classList.remove("liItem");
                        containerBox.classList.add("todoBoxChecked");
                        containerBox.classList.remove("todoBox");
                        btn.classList.add("checkBoxChecked");
                        btn.classList.remove("checkBox");
                        textBox.classList.add("taskChecked");
                        textBox.classList.remove("task");
                        lineHr.classList.add("lineChecked");
                        lineHr.classList.remove("line");
                        btn.innerHTML = '<img src="images/icon-check.svg" alt="check">';
                        remaining--;
                        document.querySelector(".left").innerHTML = remaining;
                    } else {
                        btn.value = "on";
                        newTodo.classList.remove("liItemChecked");
                        newTodo.classList.add("liItem");
                        containerBox.classList.remove("todoBoxChecked");
                        containerBox.classList.add("todoBox");
                        btn.classList.remove("checkBoxChecked");
                        btn.classList.add("checkBox");
                        textBox.classList.remove("taskChecked");
                        textBox.classList.add("task");
                        lineHr.classList.remove("lineChecked");
                        lineHr.classList.add("line");
                        btn.innerHTML = "";
                        remaining++;
                        document.querySelector(".left").innerHTML = remaining;
                    }
                });

                cross.addEventListener("click", function () {
                    let parent = newTodo.parentNode;
                    parent.removeChild(newTodo);

                    if (btn.classList.contains("checkBox")) {
                        remaining--;
                        document.querySelector(".left").innerHTML = remaining;
                    }
                });

                textBox.addEventListener("mouseover", function () {
                    btn.classList.add("radioGradient");
                });
                textBox.addEventListener("mouseout", function () {
                    btn.classList.remove("radioGradient");
                });
            }
        }
    }
});

addTodo.addEventListener("keyup", function () {
    fired = false;
});

for (let i = 0; i < todoListLi.length; i++) {
    todoListButton[i].addEventListener("click", function () {
        if (todoListButton[i].value == "on") {
            todoListButton[i].value = "off";
            todoListLi[i].classList.remove("liItem");
            todoListLi[i].classList.add("liItemChecked");
            todoListContainer[i].classList.remove("todoBox");
            todoListContainer[i].classList.add("todoBoxChecked");
            todoListButton[i].classList.remove("checkBox");
            todoListButton[i].classList.add("checkBoxChecked");
            todoListText[i].classList.remove("task");
            todoListText[i].classList.add("taskChecked");
            lines[i].classList.add("lineChecked");
            lines[i].classList.remove("line");
            todoListButton[i].innerHTML = '<img src="images/icon-check.svg" alt="check">';
            remaining--;
            document.querySelector(".left").innerHTML = remaining;
        } else {
            todoListButton[i].value = "on";
            todoListLi[i].classList.add("liItem");
            todoListLi[i].classList.remove("liItemChecked");
            todoListContainer[i].classList.add("todoBox");
            todoListContainer[i].classList.remove("todoBoxChecked");
            todoListButton[i].classList.add("checkBox");
            todoListButton[i].classList.remove("checkBoxChecked");
            todoListText[i].classList.add("task");
            todoListText[i].classList.remove("taskChecked");
            lines[i].classList.add("line");
            lines[i].classList.remove("lineChecked")
            todoListButton[i].innerHTML = "";
            remaining++;
            document.querySelector(".left").innerHTML = remaining;
        }
    });
}

for (let i = 0; i < todoListText.length; i++) {
    todoListText[i].addEventListener("click", function () {
        if (todoListButton[i].value == "on") {
            todoListButton[i].value = "off";
            todoListLi[i].classList.remove("liItem");
            todoListLi[i].classList.add("liItemChecked");
            todoListContainer[i].classList.remove("todoBox");
            todoListContainer[i].classList.add("todoBoxChecked");
            todoListButton[i].classList.remove("checkBox");
            todoListButton[i].classList.add("checkBoxChecked");
            todoListText[i].classList.remove("task");
            todoListText[i].classList.add("taskChecked");
            lines[i].classList.add("lineChecked");
            lines[i].classList.remove("line");
            todoListButton[i].innerHTML = '<img src="images/icon-check.svg" alt="check">';
            remaining--;
            document.querySelector(".left").innerHTML = remaining;

        } else {
            todoListButton[i].value = "on";
            todoListLi[i].classList.add("liItem");
            todoListLi[i].classList.remove("liItemChecked");
            todoListContainer[i].classList.add("todoBox");
            todoListContainer[i].classList.remove("todoBoxChecked");
            todoListButton[i].classList.add("checkBox");
            todoListButton[i].classList.remove("checkBoxChecked");
            todoListText[i].classList.add("task");
            todoListText[i].classList.remove("taskChecked");
            lines[i].classList.add("line");
            lines[i].classList.remove("lineChecked")
            todoListButton[i].innerHTML = "";
            remaining++;
            document.querySelector(".left").innerHTML = remaining;
        }
    });
}

for (let i = 0; i < todoListCross.length; i++) {
    todoListCross[i].addEventListener("click", function () {
        let parent = todoListLi[i].parentNode;
        parent.removeChild(todoListLi[i]);

        if (todoListButton[i].classList.contains("checkBox")) {
            remaining--;
            document.querySelector(".left").innerHTML = remaining;
        }

    });
}

document.querySelector(".clearCompleted").addEventListener("click", function () {
    let todoListLiCompleted = document.querySelectorAll("#todoList .liItemChecked");
    let hr = document.querySelectorAll(".lineChecked");
    if (todoListLiCompleted.length == 0) {
        alert("Nothing to clear!");
    } else {
        for (let i = (todoListLiCompleted.length - 1); i > -1; i--) {
            let parent = todoListLiCompleted[i].parentNode;
            parent.removeChild(todoListLiCompleted[i]);

        }
    }
});

for (let i = 0; i < todoListText.length; i++) {
    todoListText[i].addEventListener("mouseover", function () {
        todoListButton[i].classList.add("radioGradient");
    });

    todoListText[i].addEventListener("mouseout", function () {
        todoListButton[i].classList.remove("radioGradient");
    });
}

document.querySelector(".allButton").addEventListener("click", function () {
    document.querySelector(".allButton").classList.add("allShowing");
    document.querySelector(".allButton").classList.remove("all");
    document.querySelector(".activeButton").classList.add("active");
    document.querySelector(".activeButton").classList.remove("activeShowing");
    document.querySelector(".completedButton").classList.add("completed");
    document.querySelector(".completedButton").classList.remove("completedShowing");
    document.querySelectorAll('.liItem').forEach(function (el) {
        el.style.display = 'block';
    });
    document.querySelectorAll('.liItemChecked').forEach(function (el) {
        el.style.display = 'block';
    });
});

document.querySelector(".activeButton").addEventListener("click", function () {
    document.querySelector(".allButton").classList.remove("allShowing");
    document.querySelector(".allButton").classList.add("all");
    document.querySelector(".activeButton").classList.remove("active");
    document.querySelector(".activeButton").classList.add("activeShowing");
    document.querySelector(".completedButton").classList.add("completed");
    document.querySelector(".completedButton").classList.remove("completedShowing");
    document.querySelectorAll('.liItem').forEach(function (el) {
        el.style.display = 'block';
    });
    document.querySelectorAll('.liItemChecked').forEach(function (el) {
        el.style.display = 'none';
    });
});

document.querySelector(".completedButton").addEventListener("click", function () {
    document.querySelector(".allButton").classList.remove("allShowing");
    document.querySelector(".allButton").classList.add("all");
    document.querySelector(".activeButton").classList.add("active");
    document.querySelector(".activeButton").classList.remove("activeShowing");
    document.querySelector(".completedButton").classList.remove("completed");
    document.querySelector(".completedButton").classList.add("completedShowing");
    document.querySelectorAll('.liItem').forEach(function (el) {
        el.style.display = 'none';
    });
    document.querySelectorAll('.liItemChecked').forEach(function (el) {
        el.style.display = 'block';
    });
});

document.querySelector(".allButtonMobile").addEventListener("click", function () {
    document.querySelector(".allButtonMobile").classList.add("allShowingMobile");
    document.querySelector(".allButtonMobile").classList.remove("allMobile");
    document.querySelector(".activeButtonMobile").classList.add("activeMobile");
    document.querySelector(".activeButtonMobile").classList.remove("activeShowingMobile");
    document.querySelector(".completedButtonMobile").classList.add("completedMobile");
    document.querySelector(".completedButtonMobile").classList.remove("completedShowingMobile");
    document.querySelectorAll('.liItem').forEach(function (el) {
        el.style.display = 'block';
    });
    document.querySelectorAll('.liItemChecked').forEach(function (el) {
        el.style.display = 'block';
    });
});

document.querySelector(".activeButtonMobile").addEventListener("click", function () {
    document.querySelector(".allButtonMobile").classList.remove("allShowingMobile");
    document.querySelector(".allButtonMobile").classList.add("allMobileMobile");
    document.querySelector(".activeButtonMobile").classList.remove("activeMobile");
    document.querySelector(".activeButtonMobile").classList.add("activeShowingMobile");
    document.querySelector(".completedButtonMobile").classList.add("completedMobile");
    document.querySelector(".completedButtonMobile").classList.remove("completedShowingMobile");
    document.querySelectorAll('.liItem').forEach(function (el) {
        el.style.display = 'block';
    });
    document.querySelectorAll('.liItemChecked').forEach(function (el) {
        el.style.display = 'none';
    });
});

document.querySelector(".completedButtonMobile").addEventListener("click", function () {
    document.querySelector(".allButtonMobile").classList.remove("allShowingMobile");
    document.querySelector(".allButtonMobile").classList.add("allMobile");
    document.querySelector(".activeButtonMobile").classList.add("activeMobile");
    document.querySelector(".activeButtonMobile").classList.remove("activeShowingMobile");
    document.querySelector(".completedButtonMobile").classList.remove("completedMobile");
    document.querySelector(".completedButtonMobile").classList.add("completedShowingMobile");
    document.querySelectorAll('.liItem').forEach(function (el) {
        el.style.display = 'none';
    });
    document.querySelectorAll('.liItemChecked').forEach(function (el) {
        el.style.display = 'block';
    });
});

document.querySelector(".theme").addEventListener("click", function () {
    let changedSize = document.documentElement.clientWidth;
    if (document.querySelector(".container").classList.contains("dark")) {
        document.querySelector(".container").classList.remove("dark");
        document.querySelector(".container").classList.add("light");
        document.querySelector(".theme").innerHTML = '<img src="images/icon-moon.svg" alt="dark theme">';
        document.querySelector("body").style.backgroundColor = "hsl(0, 0%, 98%)";
        if (changedSize > 600) {
            document.querySelector(".backgroundImg").src = "images/bg-desktop-light.jpg";
        } else {
            document.querySelector(".backgroundImg").src = "images/bg-mobile-light.jpg";
        }
    } else if (document.querySelector(".container").classList.contains("light")) {
        document.querySelector(".container").classList.remove("light");
        document.querySelector(".container").classList.add("dark");
        document.querySelector(".theme").innerHTML = '<img src="images/icon-sun.svg" alt="light theme">';
        document.querySelector("body").style.backgroundColor = "hsl(235, 21%, 11%)";
        if (changedSize > 600) {
            document.querySelector(".backgroundImg").src = "images/bg-desktop-dark.jpg";
        } else {
            document.querySelector(".backgroundImg").src = "images/bg-mobile-dark.jpg";
        }
    }
})

window.addEventListener("resize", sizeChange);
sizeChange();

var screenSize = document.documentElement.clientWidth;
if (screenSize < 600) {
    document.querySelector(".backgroundImg").src = "images/bg-mobile-dark.jpg";
} else {
    document.querySelector(".backgroundImg").src = "images/bg-desktop-dark.jpg";
}

function sizeChange() {
    let changedSize = document.documentElement.clientWidth;
    if (changedSize > 600) {
        if (document.querySelector(".container").classList.contains("light")) {
            document.querySelector(".backgroundImg").src = "images/bg-desktop-light.jpg";
        } else {
            document.querySelector(".backgroundImg").src = "images/bg-desktop-dark.jpg";
        }
    } else {
        if (document.querySelector(".container").classList.contains("light")) {
            document.querySelector(".backgroundImg").src = "images/bg-mobile-light.jpg";
        } else {
            document.querySelector(".backgroundImg").src = "images/bg-mobile-dark.jpg";
        }
    }
}
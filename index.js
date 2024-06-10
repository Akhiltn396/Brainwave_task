const todoInput = document.getElementById('inputData');
const addButton = document.getElementsByClassName('add-todo');
let todoCount = 0;

const addTodo = () => {

    // accessing tables and including new row 
    
    const table = document.getElementById('my-table')
    const newRow = table.insertRow();

    if (todoInput.value == "") {
        alert("Please enter your todo")
    }
    else {

        // Each cell in a row

        const slNo = newRow.insertCell(0);
        const todoCell = newRow.insertCell(1);
        const addedTimeCell = newRow.insertCell(2);
        const editCell = newRow.insertCell(3);
        const deleteCell = newRow.insertCell(4);

        todoCount++;

        // currentTime
        const currentTime = new Date().toLocaleString();

        // Including necessary values
        slNo.innerText = todoCount;
        todoCell.innerText = todoInput.value;
        addedTimeCell.innerText = currentTime;
        deleteCell.innerText = "Delete";

        //Edit todo
        editCell.innerText = 'Edit';
        editCell.onclick = function () {
            editTodo(newRow, todoCell);
        };
        editCell.appendChild(editButton);

        // Delete todo

        todoInput.value = ""
        deleteCell.onclick = function () {
            newRow.remove();
            todoCount--;
        };
    }
}

//Function for edit todo

function editTodo(row, todoCell) {
    const newTodo = prompt("Edit your todo item:", todoCell.innerText);
    if (newTodo !== null && newTodo !== "") {
        todoCell.innerText = newTodo;
    }
}
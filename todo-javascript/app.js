const input = document.getElementById('input')
const todoTitle = document.getElementById('todoTitle')
const addTodoButton = document.getElementById('addTodoButton')
const todos = document.getElementById('todos')
const charCount = document.getElementById('charCount')
const limit = input.maxLength
input.addEventListener('input', (e) => {
    var value = input.value
    charCount.innerHTML = value.length + '/' + limit
    todoTitle.innerHTML = 'Todo Title : ' + value
})
function doneTodo(e){
    var target = e.target
    var li = target.parentElement
    var textDecoration = li.style.textDecoration
    if (!textDecoration){
        li.style.textDecoration = 'line-through'
    }else{
        li.style.textDecoration = ''
    }
   
}

function changeColor(e){
    var target = e.target
    var li = target.parentElement
    var textColor = li.style.color
    if (!textColor){
        li.style.color = 'red'
    }else{
        li.style.color = ''
    }
}

function removeTodo(e){
    var target = e.target
    var li = target.parentElement
    todos.removeChild(li)
}
function addTodo(todo){
   var node = document.createElement('li')
   var removeBtn = document.createElement('button')
   var doneBtn = document.createElement('button')
   var changeColorBtn = document.createElement('button')
   changeColorBtn.innerHTML = 'Change Color'
   doneBtn.innerHTML = 'Done'
   removeBtn.innerHTML = 'x'
   node.innerHTML = todo

   removeBtn.addEventListener('click', removeTodo)
   doneBtn.addEventListener('click', doneTodo)
   changeColorBtn.addEventListener('click', changeColor)
   node.appendChild(changeColorBtn)
   node.appendChild(doneBtn)
   node.appendChild(removeBtn)
   todos.appendChild(node)
}
addTodoButton.addEventListener('click', () => {
    addTodo(input.value)
})
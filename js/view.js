const btnTask = document.querySelector('.btnTask');
const btnSearch = document.querySelector('.btnSearch');
const btnArrow = document.querySelector('.btnArrow')
const taskName = document.querySelector('.inText');
const searchBar = document.querySelector('.inSearch');
const taskBox = document.querySelector('.flex');
const selector = document.querySelector('#selector1')
const menu = document.querySelector('.menubottom')
const prioritySelector = document.querySelector('#selector2')
/* const trash = document.querySelectorAll('.deleteZone') */


/* PINTAR LAS TAREAS  -FUNCIONA */
function pintarTareas(pTareas, pDom) {
    pDom.innerHTML = "";
    pTareas.forEach(tarea => pintarTarea(tarea, pDom));
}
/* 
function pintarTarea(pTarea, pDom) {
    let article = document.createElement('article')
    article.className = `${pTarea.prioridad}`
    article.innerHTML = `<h3>${pTarea.nombre}</h3>
    <p>${pTarea.descripcion}</p>
    <div class="deleteZone">
        <i class="fa-solid fa-trash-can"></i>
    </div>`

    pDom.appendChild(article)
} */

function pintarTarea(pTarea, pDom) {
    let article = document.createElement('article')
    article.id = 'task_' + pTarea.id
    article.className = `${pTarea.prioridad}`
    article.innerHTML = `<h3>${pTarea.nombre}</h3>
    <p>${pTarea.descripcion}</p>`

    let deleteZone = document.createElement('div')
    deleteZone.className = 'deleteZone'
    deleteZone.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
    deleteZone.dataset.id = pTarea.id
    deleteZone.addEventListener('click', removeTask)

    article.appendChild(deleteZone)
    pDom.appendChild(article)
}

pintarTareas(tasksReverse, taskBox)

/* AÑADIR TAREAS AL ARRAY -FUNCIONA*/

btnTask.addEventListener('click', addTask)

function addTask() {
    let nombre = taskName.value
    let prioridad = selector.value.toLowerCase()

    if (nombre !== "" && prioridad !== 'prioridad') {
        const newTask = {
            id: tasks.length + 1,
            nombre: nombre,
            descripcion: "",
            prioridad: prioridad,
        }
        tasks.push(newTask);
        pintarTarea(newTask, taskBox)
    } else { alert('No dejes campos en blanco') }

}

/* BUSCADOR SEMANTICO -FUNCIONA*/

searchBar.addEventListener('input', busqueda);

function busqueda(event) {
    let busqueda = event.target.value;
    pintarTareas(filterByLetter(tasksReverse, busqueda), taskBox)
}

/* FILTRO POR PRIORIDAD */
prioritySelector.addEventListener('input', seleccion)

function seleccion(event) {
    let seleccion = event.target.value;
    if (seleccion !== 'Prioridad') {
        pintarTareas(filterByPrioridad(tasksReverse, seleccion), taskBox)
    } else { pintarTareas(tasksReverse, taskBox) }
}

/* PINTAR EL MENU BOTTOM ---FUNCIONA*/

btnArrow.addEventListener('click', showMenu)

function showMenu() {
    if (menu.className === 'menubottom') {
        menu.classList.replace('menubottom', 'menubottomh')
        btnArrow.classList.replace('btnArrow', 'btnArrowRotate')
    } else {
        menu.classList.replace('menubottomh', 'menubottom')
        btnArrow.classList.replace('btnArrowRotate', 'btnArrow')
    }
}

/* ELIMINAR TAREAS */

function removeTask(event) {
    let id = parseInt(event.target.dataset.id)
    let taskToRemove = document.querySelector('#task_' + id)
    let newList = taskToRemove.parentNode.removeChild(taskToRemove);
    tasks = deleteTask(tasks, id);
    if (tasks.length === 0) {
        pintarTareas(tasks, taskBox);
    }
}

function deleteTask(pList, pId) {
    return pList.filter(task => task.id !== pId);
}
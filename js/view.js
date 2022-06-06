const btnTask = document.querySelector('.btnTask');
const btnSearch = document.querySelector('.btnSearch');
const btnArrow = document.querySelector('.btnArrow')
const taskName = document.querySelector('.inText');
const searchBar = document.querySelector('.inSearch');
const taskBox = document.querySelector('.flex');
const selector = document.querySelector('#selector1')
const menu = document.querySelector('.menubottom')
const prioritySelector = document.querySelector('#selector2')
const deleteZone = document.querySelectorAll('.deleteZone')

/* PINTAR LAS TAREAS  -FUNCIONA */
function pintarTareas(pTareas, pDom) {
    if (pTareas.length !== 0) {
        pDom.innerHTML = "";
        pTareas.forEach(tarea => pintarTarea(tarea, pDom));
    } else {
        /* pDom.innerHTML = ""; */
        pDom.innerHTML = `<h4>NO HAY TAREAS PARA MOSTRAR</h4>`;
    }
}




function pintarTarea(pTarea, pDom) {
    let article = document.createElement('article')
    article.id = 'task_' + pTarea.id
    article.className = `${pTarea.prioridad}`
    article.innerHTML = `<h3>${pTarea.nombre}</h3>`
    {/* <p>${pTarea.descripcion}</p>` */ }

    let deleteZone = document.createElement('div')
    deleteZone.className = 'deleteZone'
    deleteZone.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
    deleteZone.dataset.id = pTarea.id
    deleteZone.addEventListener('click', removeTask)

    article.appendChild(deleteZone)
    pDom.appendChild(article)
}

pintarTareas(tasks, taskBox)

/* AÑADIR TAREAS AL ARRAY ---FUNCIONA*/

btnTask.addEventListener('click', addTask)
let lastId = 0;
let getLastId = localStorage.getItem('lastId')
if (getLastId) {
    lastId = JSON.parse(localStorage.getItem('lastId'))
}

function addTask() {
    let nombre = taskName.value;
    let prioridad = selector.value.toLowerCase();
    selector.value = "Prioridad";
    taskName.value = "";

    if (nombre !== "" && prioridad !== 'prioridad') {
        const newTask = {
            id: lastId + 1,
            nombre: nombre,
            descripcion: "",
            prioridad: prioridad,
        }
        tasks.push(newTask);
        lastId++;
        localStorage.setItem('lastId', JSON.stringify(lastId))
        localStorage.setItem('tasks', JSON.stringify(tasks))
        pintarTareas(tasks, taskBox)
    } else { alert('No dejes campos en blanco') }

}

/* BUSCADOR SEMANTICO ---FUNCIONA*/

searchBar.addEventListener('input', busqueda);

function busqueda(event) {
    let busqueda = event.target.value;
    pintarTareas(filterByLetter(tasks, busqueda), taskBox)

}

/* FILTRO POR PRIORIDAD ---FUNCIONA */
prioritySelector.addEventListener('input', seleccion)

function seleccion(event) {
    let seleccion = event.target.value;
    if (seleccion !== 'Prioridad') {
        pintarTareas(filterByPrioridad(tasks, seleccion), taskBox)
    } else { pintarTareas(tasks, taskBox) }
}

/* PINTAR EL MENU BOTTOM ---FUNCIONA*/

btnArrow.addEventListener('click', showMenu)

function showMenu() {
    selector.value = "Prioridad";
    taskName.value = "";
    prioritySelector.value = "Prioridad";
    searchBar.value = "";

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

    let idData = parseInt(event.target.parentNode.dataset.id)

    let deleteTask = document.querySelector('#task_' + idData)

    deleteTask.parentNode.removeChild(deleteTask)

    const deletePosition = tasks.findIndex(task => task.id === idData);

    tasks.splice(deletePosition, 1);

    pintarTareas(tasks, taskBox)

    localStorage.setItem('tasks', JSON.stringify(tasks))

}

/* LOCAL STORAGE */

let initialStorage = localStorage.getItem('tasks')
if (initialStorage) {
    tasks = JSON.parse(localStorage.getItem('tasks'))
    pintarTareas(tasks, taskBox)
}






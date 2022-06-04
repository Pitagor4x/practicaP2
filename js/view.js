const btnTask = document.querySelector('.btnTask');
const btnSearch = document.querySelector('.btnSearch');
const btnArrow = document.querySelector('.btnArrow')
const taskName = document.querySelector('.inText');
const searchBar = document.querySelector('.inSearch');
const taskBox = document.querySelector('.flex');
const selector = document.querySelector('#selector')
const menu = document.querySelector('.menubottom')
const trash = document.querySelector('.fa-solid fa-trash-can')

/* PINTAR LAS TAREAS  -FUNCIONA */
function pintarTareas(pTareas, pDom) {
    pDom.innerHTML = "";
    pTareas.forEach(tarea => pintarTarea(tarea, pDom));
}

function pintarTarea(pTarea, pDom) {
    let article = document.createElement('article')
    article.className = `${pTarea.prioridad}`
    article.innerHTML = `<h3>${pTarea.nombre}</h3>
    <p>${pTarea.descripcion}</p>
    <div class="deleteZone">
        <i class="fa-solid fa-trash-can"></i>
    </div>`

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

/* PINTAR EL MENU BOTTOM */

/* btnArrow.addEventListener('click', printMenu(menu))

function printMenu(pDom) {
    pDom.innerHTML += `<div class="taskNameSelector">
        <input class="inText" type="text" placeholder="Nombre de la tarea">
        <select name="" id="selector">
            <option value="Prioridad" selected='selected'>Prioridad</option>
            <option value="Baja">Baja</option>
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
        </select>
    </div>
    <input placeholder="Buscar tarea" class="inSearch" type="text">`
} */

/* ELIMINAR TAREAS */

/* trash.addEventListener('click', removeTask)

function removeTask
 */
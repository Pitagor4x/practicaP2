const btnTask = document.querySelector('.btnTask');
const btnSearch = document.querySelector('.btnSearch');
const btnArrow = document.querySelector('.btnArrow')
const taskName = document.querySelector('.inText');
const searchBar = document.querySelector('.inSearch');
const taskBox = document.querySelector('.flex');
const selector = document.querySelector('#selector')
const menu = document.querySelector('.menubottom')
const trash = document.querySelector('.deleteZone')


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
    let id = 4;

    if (nombre !== "" && prioridad !== 'prioridad') {
        const newTask = {
            id: id,
            nombre: nombre,
            descripcion: "",
            prioridad: prioridad,
        }
        id++
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

trash.addEventListener('click', removeTask)
pId =
    function removeTask(pId) {
        listaDelete = tasksReverse.splice(pId - 1)
    }

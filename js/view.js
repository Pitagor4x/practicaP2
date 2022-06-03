const btnTask = document.querySelector('.btnTask');
const btnSearch = document.querySelector('.btnSearch');
const taskName = document.querySelector('.inText');
const searchBar = document.querySelector('.inSearch');
const taskBox = document.querySelector('.flex');

const taskDescription = document.querySelector('article>p')

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

function addTask(pNombre, pDescripcion, pPrioridad) {
    let nombre = pNombre;
    let descripcion = pDescripcion;
    let prioridad = pPrioridad

    const newTask = {
        nombre: nombre,
        descripcion: descripcion,
        prioridad: prioridad,
    }

    tasks.push(newTask);
    pintarTarea(newTask, taskBox)
}

/* addTask('Hola', 'Caracola', 'media') */

/* BUSCADOR SEMANTICO -FUNCIONA*/

searchBar.addEventListener('input', busqueda);

function busqueda(event) {
    let busqueda = event.target.value;
    pintarTareas(filterByLetter(tasksReverse, busqueda), taskBox)
}

/* EVENTO AÑADIR TAREA */

/* PINTAR EL MENU BOTTOM */

/* ELIMINAR TAREAS */

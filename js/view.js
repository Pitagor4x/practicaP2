const btnTask = document.querySelector('.btnTask');
const btnSearch = document.querySelector('.btnSearch');
const taskName = document.querySelector('.inText');
const taskDate = document.querySelector('.inDate');
const searchBar = document.querySelector('.inSearch');
const taskBox = document.querySelector('.flex');

/* PINTAR LAS TAREAS */
function pintarTareas(pTareas, pDom) {
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
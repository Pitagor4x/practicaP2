/* REVERTIR EL ARRAY PARA QUE PRIMERO PINTE LAS ULTIMAS TAREAS AÑADIDAS */
/* ARRAY SIMPLE PRIORIDADES */

const listPrioridades = tasks.map(task => task.prioridad);

/* FUNCION FILTRADO POR LETRA PARA BUSQUEDA SEMANTICA */

function filterByLetter(pTasks, pLetter) {
    return pTasks.filter(task => task.nombre.toLowerCase().includes(pLetter.toLowerCase()))
}

/* FUNCION FILTRO POR PRIORIDAD */

function filterByPrioridad(pTasks, pPrioridad) {
    return pTasks.filter(task => task.prioridad.toLowerCase() === pPrioridad.toLowerCase())
}

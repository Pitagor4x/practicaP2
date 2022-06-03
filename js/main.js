/* REVERTIR EL ARRAY PARA QUE PRIMERO PINTE LAS ULTIMAS TAREAS AÑADIDAS */

const tasksReverse = [...tasks].reverse()

/* ARRAY SIMPLE PRIORIDADES */

const listPrioridades = tasks.map(task => task.prioridad);

/* FUNCION BUSQUEDA SEMANTICA */

function filterByLetter(pTasks, pLetter) {
    return pTasks.filter(task => task.nombre.toLowerCase().includes(pLetter.toLowerCase()))
}
/**
 * Engine dinámico para gestión de tareas
 * Aplicando lógica de prioridades y filtrado
 */

const tasks = [
    { id: 1, title: 'Refactorizar CSS Gótico', priority: 'High', status: 'Pending' },
    { id: 2, title: 'Repasar clase de Xavier', priority: 'Medium', status: 'Completed' },
    { id: 3, title: 'Optimizar Assets Atara', priority: 'High', status: 'In Progress' }
];

const getPendingHighPriority = (taskList) => {
    return taskList.filter(task => 
        task.priority === 'High' && task.status !== 'Completed'
    );
};

console.log("--- Tareas Críticas Pendientes ---");
const critical = getPendingHighPriority(tasks);

critical.forEach(t => {
    console.log(`[!] ${t.title.toUpperCase()} - Estado: ${t.status}`);
});

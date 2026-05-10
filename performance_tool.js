/**
 * Utility: Execution Time Tracker
 * Practicando el uso de performance.now() y callbacks
 */

const measureExecution = (taskName, callback) => {
    const startTime = performance.now();
    
    console.log(`[START] Ejecutando: ${taskName}...`);
    callback();
    
    const endTime = performance.now();
    const duration = (endTime - startTime).toFixed(4);
    
    console.log(`[END] ${taskName} finalizado.`);
    console.log(`⏱️ Tiempo total: ${duration} milisegundos.`);
};

// Ejemplo de una tarea que consume recursos
const simulateProcessing = () => {
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
        sum += Math.sqrt(i);
    }
    return sum;
};

// Test del sistema
measureExecution("Cálculo de Algoritmo de Shaders", simulateProcessing);

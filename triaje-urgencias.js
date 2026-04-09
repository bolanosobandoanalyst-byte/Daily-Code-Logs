/**
 * SISTEMA DE CLASIFICACIÓN DE TRIAJE (ESTÁNDAR)
 * Objetivo: Automatizar la prioridad de atención basada en signos vitales.
 * Campos: Escala 1 (Crítico) a 5 (No urgente).
 */

const nivelesTriaje = {
    1: "Rojo - Reanimación (Inmediata)",
    2: "Naranja - Emergencia (Very Urgent)",
    3: "Amarillo - Urgencia (Urgent)",
    4: "Verde - Prioritario (Standard)",
    5: "Azul - No Urgente (Non-Urgent)"
};

function clasificarPaciente(frecuenciaCardiaca, estadoConciencia) {
    if (frecuenciaCardiaca > 150 || estadoConciencia === 'inconsciente') {
        return nivelesTriaje[1]; // Crítico
    } else if (frecuenciaCardiaca > 120) {
        return nivelesTriaje[2]; // Emergencia
    } else {
        return nivelesTriaje[3]; // Urgencia Estándar
    }
}

// Ejemplo de uso clínico simulado
const estadoPaciente = clasificarPaciente(160, 'inconsciente');
console.log(Estado de Prioridad: ${estadoPaciente});
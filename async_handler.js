/**
 * Simulación de Fetch Data con Async/Await
 * Practicando el manejo de estados de carga y errores
 */

const fetchData = async (resource) => {
    console.log(`[WAIT] Consultando recurso: ${resource}...`);
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.2; // 80% de probabilidad de éxito
            if (success) {
                resolve({
                    status: 200,
                    data: `Contenido de ${resource} cargado correctamente.`
                });
            } else {
                reject(new Error(`Error 500: Fallo en la conexión con ${resource}`));
            }
        }, 1500);
    });
};

// Ejecución del script
const main = async () => {
    try {
        const response = await fetchData("Sistema_Atara_Core");
        console.log("✅ Éxito:", response.data);
    } catch (error) {
        console.error("❌ Fallo crítico:", error.message);
    }
};

main();

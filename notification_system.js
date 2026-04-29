/**
 * Sistema de Notificaciones dinámicas
 * Practicando manipulación de estados y timers
 */

const notify = (message, type = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    
    const styles = {
        success: '✅ [SUCCESS]',
        error:   '❌ [ERROR]',
        info:    'ℹ️ [INFO]'
    };

    const prefix = styles[type] || styles.info;
    
    console.log(`${prefix} (${timestamp}): ${message}`);
};

// Simulación de eventos en la plataforma
const simulateEvents = () => {
    notify("Conexión establecida con el servidor", "success");
    
    setTimeout(() => {
        notify("Actualizando base de datos...", "info");
    }, 1000);

    setTimeout(() => {
        notify("Error de validación en el campo 'Password'", "error");
    }, 2500);
};

simulateEvents();

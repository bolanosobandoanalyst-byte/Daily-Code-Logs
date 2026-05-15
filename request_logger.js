/**
 * Middleware de Registro de Peticiones (Logger)
 * Practicando el flujo de datos en servidores Node.js
 */

const loggerMiddleware = (req) => {
    const { method, url, ip } = req;
    const timestamp = new Date().toISOString();

    console.log(`[${timestamp}] ${method} request to ${url} from ${ip}`);
    
    // Simulación de validación de Header
    if (!req.headers['x-api-key']) {
        console.warn('⚠️ Alerta: Petición sin API Key detectada.');
    } else {
        console.log('✅ Autenticación de cabecera presente.');
    }
};

// Simulación de objeto de petición (Request)
const mockRequest = {
    method: 'POST',
    url: '/api/v1/atara-system/update',
    ip: '192.168.1.15',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'atara_2026_key'
    }
};

// Ejecución de la prueba
console.log("--- Iniciando Middleware de Auditoría ---");
loggerMiddleware(mockRequest);

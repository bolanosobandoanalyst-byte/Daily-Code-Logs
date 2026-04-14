const crypto = require('crypto');

/**
 * Simulación de encriptación para práctica de ciberseguridad
 */
function secureData(payload) {
    const secret = 'mi-clave-secreta-2026';
    const hash = crypto.createHmac('sha256', secret)
                   .update(payload)
                   .digest('hex');
    
    return {
        original: payload,
        secureHash: hash,
        timestamp: new Date().toISOString()
    };
}

const myResult = secureData("Acceso_Admin_Atara");
console.table(myResult);

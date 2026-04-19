const crypto = require('crypto');

/**
 * Generador de identificadores únicos para proyectos
 * Útil para asignación de IDs en bases de datos locales
 */
const generateUniqueId = (prefix = 'ID') => {
    const randomBytes = crypto.randomBytes(8).toString('hex');
    const timestamp = Date.now().toString(36);
    return `${prefix}-${timestamp}-${randomBytes}`.toUpperCase();
};

// Simulación de creación de registros
const sessions = ['Admin', 'Guest', 'Editor'].map(role => ({
    role: role,
    token: generateUniqueId('ST'),
    createdAt: new Date().toLocaleString()
}));

console.log("--- Tokens de Sesión Generados ---");
console.table(sessions);

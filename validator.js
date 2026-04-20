/**
 * Simple Validator para prácticas de Academia X
 * Verifica que los campos no estén vacíos y tengan longitud mínima
 */

const validateInput = (data, minLength = 3) => {
    const results = {
        isValid: true,
        errors: []
    };

    for (const [key, value] of Object.entries(data)) {
        if (!value || value.trim().length < minLength) {
            results.isValid = false;
            results.errors.push(`El campo ${key} es demasiado corto o está vacío.`);
        }
    }

    return results;
};

// Test de prueba para la consola
const userData = {
    username: "Atara_Goth",
    email: "dev@example.com",
    bio: "Lo" // Esto debería dar error
};

const check = validateInput(userData, 5);
console.log("--- Resultado de Validación ---");
console.log(check.isValid ? "✅ Todo correcto" : "❌ Errores detectados:");
console.table(check.errors);

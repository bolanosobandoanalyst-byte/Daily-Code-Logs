// Herramienta de validación de seguridad para contraseñas
function checkPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++; // Tiene mayúsculas
    if (/[0-9]/.test(password)) strength++; // Tiene números
    if (/[^A-Za-z0-9]/.test(password)) strength++; // Tiene símbolos

    const levels = ["Muy Débil", "Débil", "Media", "Fuerte", "Hacker Proof"];
    return levels[strength];
}

console.log("Nivel de seguridad:", checkPasswordStrength("Admin123!")); 

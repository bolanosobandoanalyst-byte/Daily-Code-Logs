/**
 * Motor de cifrado y codificación de datos
 * Practicando manipulación de cadenas y hashing básico
 */

const createSecurityCipher = (text, shift = 3) => {
    return text.split('').map(char => {
        const code = char.charCodeAt(0);
        // Cifrado César simple para caracteres alfabéticos
        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
        return char;
    }).join('');
};

// Test del sistema
const originalText = "AtaraSystemSecurity";
const encryptedText = createSecurityCipher(originalText);

console.log("--- Sistema de Encriptación ---");
console.log(`Original: ${originalText}`);
console.log(`Cifrado:  ${encryptedText}`);

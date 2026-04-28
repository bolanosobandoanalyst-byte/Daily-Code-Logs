/**
 * Procesador de datos para limpieza de inventario
 * Aplicando métodos de arreglos (filter, map, sort)
 */

const rawInventory = [
    { id: 101, name: 'Teclado Mecánico', stock: 5, category: 'Hardware' },
    { id: 102, name: 'Monitor 4K', stock: 0, category: 'Hardware' },
    { id: 103, name: 'Licencia VS Code', stock: 15, category: 'Software' },
    { id: 104, name: 'Cable HDMI', stock: 2, category: 'Hardware' }
];

// 1. Filtrar solo los que tienen stock disponible
// 2. Formatear el nombre a mayúsculas
// 3. Ordenar por cantidad de stock (mayor a menor)
const processData = (items) => {
    return items
        .filter(item => item.stock > 0)
        .map(item => ({
            ...item,
            name: item.name.toUpperCase(),
            lastUpdate: new Date().toLocaleDateString()
        }))
        .sort((a, b) => b.stock - a.stock);
};

const processed = processData(rawInventory);

console.log("--- Inventario Optimizado ---");
console.table(processed);

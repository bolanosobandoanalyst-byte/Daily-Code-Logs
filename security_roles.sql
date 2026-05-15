-- Gestión de Roles y Permisos de Seguridad (RBAC)
-- Practicando control de accesos a nivel de base de datos

-- 1. Creación de la estructura de roles del sistema
CREATE TABLE IF NOT EXISTS system_roles (
    role_id INT PRIMARY KEY AUTO_INCREMENT,
    role_name VARCHAR(30) UNIQUE NOT NULL,
    clearance_level INT DEFAULT 1
);

-- 2. Insertando roles estándar de desarrollo
INSERT INTO system_roles (role_name, clearance_level) VALUES 
('Administrator', 3),
('Developer_Core', 2),
('Guest_Viewer', 1)
ON DUPLICATE KEY UPDATE clearance_level = VALUES(clearance_level);

-- 3. Simulación de revocación de accesos por auditoría de viernes
-- Desactivamos temporalmente un usuario sospechoso
UPDATE users_status 
SET is_active = FALSE, 
    remarks = 'Revocado temporalmente por auditoría semanal'
WHERE user_email = 'test_unverified@domain.com';

-- 4. Consulta de control para el reporte de seguridad
SELECT role_name, clearance_level 
FROM system_roles 
WHERE clearance_level >= 2
ORDER BY clearance_level DESC;

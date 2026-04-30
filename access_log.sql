-- Control y registro de accesos del sistema
-- Practicando creación de tablas y consultas temporales

CREATE TABLE IF NOT EXISTS system_logs (
    log_id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(50) NOT NULL,
    access_level VARCHAR(20) DEFAULT 'User',
    action_type VARCHAR(50) NOT NULL,
    ip_address VARCHAR(15),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Simulación de registros de actividad del día
INSERT INTO system_logs (user_name, access_level, action_type, ip_address) 
VALUES 
('Atara_Core', 'Administrator', 'INITIALIZE_SHADERS', '127.0.0.1'),
('User_007', 'User', 'LOGIN_ATTEMPT', '192.168.1.45'),
('Admin_Node', 'Administrator', 'DATA_ENCRYPTION', '10.0.0.5');

-- Consultando accesos de los administradores en el último tiempo
SELECT user_name, action_type, created_at 
FROM system_logs 
WHERE access_level = 'Administrator' 
ORDER BY created_at DESC;

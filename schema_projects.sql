-- Estructura de base de datos para gestión de activos
-- Ideal para practicar relaciones y constraints

CREATE TABLE IF NOT EXISTS projects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    project_name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    status ENUM('Planning', 'In Progress', 'Completed') DEFAULT 'Planning',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserción de datos de prueba para testing de queries
INSERT INTO projects (project_name, category, status) 
VALUES 
('Sistema de Gestión Gótica', 'Frontend', 'In Progress'),
('Bot de Automatización Python', 'Backend', 'Completed'),
('API de Seguridad', 'DevOps', 'Planning');

-- Query de consulta rápida para reporte de lunes
SELECT project_name, status 
FROM projects 
WHERE status != 'Completed'
ORDER BY created_at DESC;

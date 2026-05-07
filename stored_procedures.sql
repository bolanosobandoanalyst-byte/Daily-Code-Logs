-- Optimizando consultas frecuentes mediante Vistas
-- Practicando lógica de base de datos para reportes rápidos

-- 1. Creamos una vista para ver proyectos activos con prioridad alta
CREATE VIEW active_critical_tasks AS
SELECT task_name, deadline, assigned_to
FROM system_tasks
WHERE status = 'In_Progress' AND priority = 'Critical';

-- 2. Procedimiento para actualizar el estado de un módulo
DELIMITER //

CREATE PROCEDURE UpdateModuleStatus(
    IN moduleId INT, 
    IN newStatus VARCHAR(20)
)
BEGIN
    UPDATE system_modules 
    set status = newStatus, 
        last_updated = NOW()
    WHERE id = moduleId;
    
    SELECT CONCAT('Módulo ', moduleId, ' actualizado a ', newStatus) AS Result;
END //

DELIMITER ;

-- Test de la vista
SELECT * FROM active_critical_tasks;

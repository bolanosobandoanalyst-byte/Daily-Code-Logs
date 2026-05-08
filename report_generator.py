import datetime
import json

def generate_weekly_summary(data_list):
    """
    Genera un resumen semanal de actividades procesadas
    Practicando el manejo de JSON y formatos de fecha
    """
    print(f"--- Generador de Reportes | {datetime.date.today()} ---")
    
    summary = {
        "total_tasks": len(data_list),
        "completed": sum(1 for item in data_list if item['status'] == 'Done'),
        "pending": sum(1 for item in data_list if item['status'] != 'Done'),
        "generated_at": str(datetime.datetime.now())
    }

    # Simulación de guardado de reporte
    report_json = json.dumps(summary, indent=4)
    print("[SUCCESS] Resumen calculado correctamente:")
    print(report_json)
    
    return report_json

if __name__ == "__main__":
    # Datos de prueba del sistema
    weekly_data = [
        {"id": 1, "task": "Refactor Auth", "status": "Done"},
        {"id": 2, "task": "Update Shaders", "status": "In Progress"},
        {"id": 3, "task": "Fix DB Connection", "status": "Done"}
    ]
    
    generate_weekly_summary(weekly_data)

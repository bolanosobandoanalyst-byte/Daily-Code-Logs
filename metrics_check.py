import time

def check_system_metrics():
    """
    Simulación de métricas del sistema y verificación de servicios
    Ideal para mantener el monitoreo en proyectos personales
    """
    print("--- Iniciando Monitoreo del Sistema ---")
    
    metrics = {
        "CPU_Usage": "14%",
        "RAM_Free": "8.2 GB",
        "System_Status": "ONLINE",
        "Connection": "Secure"
    }
    
    for key, value in metrics.items():
        print(f"[OK] {key}: {value}")
        time.sleep(0.1)
        
    print("\n--- Verificación Finalizada ---")

if __name__ == "__main__":
    check_system_metrics()

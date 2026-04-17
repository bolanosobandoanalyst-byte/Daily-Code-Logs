import datetime

# Simulación de un log de auditoría de seguridad para práctica
def run_security_check(system_logs):
    print(f"--- Iniciando Auditoría: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M')} ---")
    
    threat_levels = {
        "LOW": 0,
        "MEDIUM": 0,
        "HIGH": 0
    }

    for log in system_logs:
        level = log.get("level", "INFO")
        if level in threat_levels:
            threat_levels[level] += 1
            print(f"[ALERT] Evento detectado: {log['event']} | Nivel: {level}")

    print("\n--- Resumen de Vulnerabilidades ---")
    for level, count in threat_levels.items():
        print(f"{level}: {count} encontrados.")

if __name__ == "__main__":
    # Datos de prueba
    sample_data = [
        {"event": "Login fallido", "level": "MEDIUM"},
        {"event": "Puerto 80 abierto", "level": "LOW"},
        {"event": "Inyección SQL detectada", "level": "HIGH"},
        {"event": "Acceso root", "level": "HIGH"}
    ]
    
    run_security_check(sample_data)

import datetime

def sanitize_user_records(raw_data):
    """
    Limpia y normaliza registros de usuarios duplicados o incompletos.
    Practicando comprensión de diccionarios y filtrado de datos.
    """
    print(f"--- Iniciando Depuración de Datos | {datetime.datetime.now().strftime('%H:%M:%S')} ---")
    
    cleaned_records = {}
    
    for record in raw_data:
        uid = record.get("id")
        email = record.get("email", "").strip().lower()
        
        # Filtramos registros sin ID o con correos inválidos
        if not uid or "@" not in email:
            print(f"[OMITIDO] Registro inválido detectado: ID {uid}")
            continue
            
        # Normalizamos el estado y guardamos evitando duplicados (dejamos el más reciente)
        cleaned_records[uid] = {
            "user_id": uid,
            "email": email,
            "role": record.get("role", "guest").upper(),
            "verified": record.get("status") == "active",
            "processed_at": str(datetime.date.today())
        }
        
    print(f"\n[ÉXITO] Depuración completada. {len(cleaned_records)} registros unificados.")
    return list(cleaned_records.values())

if __name__ == "__main__":
    # Datos de prueba con ruido (duplicados y correos mal formateados)
    dirty_dataset = [
        {"id": 101, "email": " CORE@atara.com ", "role": "admin", "status": "active"},
        {"id": 102, "email": "invalid_mail_doc", "role": "user", "status": "pending"},
        {"id": 101, "email": "core@atara.com", "role": "admin", "status": "active"},  # Duplicado
        {"id": 103, "email": "guest_node@node.org", "role": "guest", "status": "active"}
    ]
    
    sanitized = sanitize_user_records(dirty_dataset)
    print(sanitized)

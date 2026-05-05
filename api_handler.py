import time

def connect_to_secure_node():
    """
    Simulación de conexión segura a un nodo del sistema
    Practicando el manejo de excepciones y reintentos (Retry Pattern)
    """
    max_retries = 3
    
    for attempt in range(1, max_retries + 1):
        try:
            print(f"[CONEXIÓN] Intentando conectar al nodo... (Intento {attempt}/{max_retries})")
            # Simulación de respuesta
            response_status = 200
            
            if response_status == 200:
                print("[SUCCESS] Nodo conectado de forma segura.")
                return True
        except Exception as e:
            print(f"[ERROR] Fallo en la conexión: {e}")
            time.sleep(1)
            
    print("[CRITICAL] Límite de reintentos alcanzado. Sistema fuera de línea.")
    return False

if __name__ == "__main__":
    connect_to_secure_node()

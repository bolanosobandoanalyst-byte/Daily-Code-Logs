import time
import sys

def simulate_data_load(task_name):
    print(f"--- Iniciando tarea: {task_name} ---")
    for i in range(1, 11):
        time.sleep(0.3)  # Simula procesamiento
        progress = "█" * i + "░" * (10 - i)
        sys.stdout.write(f"\rProgreso: |{progress}| {i*10}%")
        sys.stdout.flush()
    print(f"\n[OK] {task_name} completado con éxito.\n")

if __name__ == "__main__":
    simulate_data_load("Limpieza de dataset")

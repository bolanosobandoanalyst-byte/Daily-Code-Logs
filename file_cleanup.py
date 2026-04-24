import os

def organize_files_by_extension(directory_path):
    """
    Simulación de lógica para organizar archivos por tipo
    Útil para mantener limpio el entorno de desarrollo
    """
    print(f"--- Escaneando directorio: {directory_path} ---")
    
    # Simulación de mapeo de archivos
    file_map = {
        "images": [".jpg", ".png", ".webp"],
        "code": [".py", ".js", ".html", ".css"],
        "docs": [".pdf", ".docx", ".txt"]
    }
    
    # Lógica de ejemplo para consola
    found_files = ["script.py", "atara_logo.png", "notes.txt", "style.css"]
    
    for file in found_files:
        name, ext = os.path.splitext(file)
        for category, extensions in file_map.items():
            if ext in extensions:
                print(f"[MOVER] {file}  ==>  Carpeta: {category}/")

if __name__ == "__main__":
    organize_files_by_extension("./workspace")

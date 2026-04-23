# Clase base para gestionar colecciones de medios
# Practicando POO: Encapsulamiento y métodos de clase

class MediaItem:
    def __init__(self, title, creator, genre):
        self.title = title
        self.creator = creator
        self.genre = genre
        self.status = "Disponible"

    def get_info(self):
        return f"[{self.status}] {self.title} - {self.creator} ({self.genre})"

    def update_status(self, new_status):
        self.status = new_status
        print(f"Estado actualizado: {self.title} ahora está {self.status}")

# Instanciando ejemplos reales
if __name__ == "__main__":
    album1 = MediaItem("Unknown Pleasures", "Joy Division", "Post-Punk")
    album2 = MediaItem("October Rust", "Type O Negative", "Gothic Metal")

    print("--- Mi Colección Digital ---")
    print(album1.get_info())
    print(album2.get_info())
    
    album2.update_status("En reproducción")

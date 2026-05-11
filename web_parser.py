import random

def simulate_web_scraper(url):
    """
    Simulación de extracción de datos (Web Scraping)
    Practicando el manejo de strings y estructuras de datos
    """
    print(f"--- Iniciando conexión con: {url} ---")
    
    # Simulando una lista de selectores CSS encontrados
    html_elements = [
        "<h1>Últimas noticias de Tech</h1>",
        "<p>Python sigue liderando el mercado en 2026</p>",
        "<h1>Lanzamiento de Atara v2.0</h1>",
        "<p>Novedades en el curso de Xavier Reyes</p>"
    ]
    
    extracted_titles = []

    for element in html_elements:
        if "<h1>" in element:
            # Limpiamos las etiquetas para obtener solo el texto
            clean_title = element.replace("<h1>", "").replace("</h1>", "")
            extracted_titles.append(clean_title)
            print(f"[EXTRAÍDO] Título encontrado: {clean_title}")

    print(f"\n--- Proceso finalizado: {len(extracted_titles)} elementos procesados ---")
    return extracted_titles

if __name__ == "__main__":
    target_site = "https://academia-x.com/blog"
    simulate_web_scraper(target_site)

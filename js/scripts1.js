document.addEventListener("DOMContentLoaded", () => {
    fetch("scripts/news.json")
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById("news-container");
            newsContainer.innerHTML = ""; // Limpiar contenido
            data.noticias.forEach(noticia => {
                const article = document.createElement("article");
                article.innerHTML = `
                    <h3>${noticia.titulo}</h3>
                    <p>${noticia.descripcion}</p>
                    <small>${noticia.fecha}</small>
                `;
                newsContainer.appendChild(article);
            });
        })
        .catch(error => {
            console.error("Error al cargar noticias:", error);
        });
});

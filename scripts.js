const images = [  
    'OIP(1).jpg',  
    'OIP(2).jpg',  
    'OIP(3).jpg',  
    'OIP.jpg',  
    'descargar.jpg',  
    // Agrega más URLs de imágenes aquí  
];  

let index = 0;  
const imagesPerLoad = 2;  

function loadImages() {  
    const container = document.getElementById('imageContainer');  

    for (let i = 0; i < imagesPerLoad && index < images.length; i++, index++) {  
        const img = document.createElement('img');  
        img.src = images[index];  
        img.alt = 'Piscina';  
        container.appendChild(img);  
    }  

    if (index >= images.length) {  
        document.getElementById('loadMoreBtn').style.display = 'none';  
    }  
}  

document.getElementById('loadMoreBtn').addEventListener('click', loadImages);  

// Cargar las primeras imágenes al inicio  
loadImages();
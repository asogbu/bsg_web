const carrusel_folder = '/img/carrusel/';

const fileTypes = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    ico: 'image/x-icon',
    bmp: 'image/bmp',
    
    mp4: 'video/mp4',
    webm: 'video/webm',
    ogg: 'video/ogg',
    avi: 'video/avi',
    mov: 'video/quicktime',
    mkv: 'video/x-matroska'
};

function getFileMIME(src) {
    const parts = src.split('.');
    const ext = parts.length > 1 ? parts.pop().toLowerCase() : '';
    return fileTypes[ext] || null;
}

function loadCarouselItems(jsonData) {
    const carouselInner = document.getElementById('carouselItems');
    const carouselIndicators = document.getElementById('carouselIndicators');

    jsonData.forEach((item, index) => {
        const { fileName: file_name, link, alt } = item;
        const itemMIME = getFileMIME(file_name);
        if (!itemMIME) {
            console.error(`Unsupported file type for ${fileName}`);
            return;
        }
        
        const indic = document.createElement('button');
        indic.setAttribute('type', 'button');
        indic.setAttribute('data-bs-target', '#carouselHero');
        indic.setAttribute('data-bs-slide-to', index);
        indic.setAttribute('aria-label', `Slide ${index + 1}`);

        const divItem = document.createElement('div');
        divItem.classList.add('carousel-item');

        if (index === 0) {
            divItem.classList.add('active');
            indic.classList.add('active');
            indic.setAttribute('aria-current', 'true');
        }

        let content;
        if (itemMIME.startsWith('video')) {
            const video = document.createElement('video');
            video.classList.add('carrusel-content');
            video.autoplay = true;
            video.loop = true;
            video.muted = true;
            video.setAttribute('playsinline', 'true');

            const source = document.createElement('source');
            source.src = carrusel_folder + file_name;
            source.type = itemMIME;

            video.appendChild(source);
            content = video;
        } else {
            const img = document.createElement('img');
            img.classList.add('carrusel-content');
            img.src = carrusel_folder + file_name;
            img.alt = alt || `Elemento de carrusel: ${file_name}`;
            content = img;
        }

        if (link) {
            const anchor = document.createElement('a');
            anchor.href = link;
            anchor.target = '_blank';
            anchor.appendChild(content);
            divItem.appendChild(anchor);
        } else {
            divItem.appendChild(content);
        }

        carouselInner.appendChild(divItem);
        carouselIndicators.appendChild(indic);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    fetch('/data/carrusel.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load carousel JSON');
            }
            return response.json();
        })
        .then(jsonData => {
            loadCarouselItems(jsonData);
        })
        .catch(error => console.error('Error loading carousel data:', error));
});

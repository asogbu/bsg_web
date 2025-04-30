function includeHTML(selector, file) {
    const container = document.querySelector(selector);
    if (container)
        fetch(file)
            .then(response => {
                if (response.ok) return response.text();
                throw new Error('Error al cargar ' + file);
            })
            .then(html => {
                container.innerHTML = html;
            })
            .catch(error => console.error(error));
}

function loadBootstrapJS() {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
    script.integrity = "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz";
    script.crossOrigin = "anonymous";

    document.body.appendChild(script);
}

document.addEventListener("DOMContentLoaded", () => {
    includeHTML("header", "/partials/navbar.html");
    includeHTML("footer", "/partials/footer.html");
    loadBootstrapJS();
});

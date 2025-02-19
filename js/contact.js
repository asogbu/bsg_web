function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const queryObject = {};
    for (const [key, value] of params.entries()) {
        queryObject[key] = decodeURIComponent(value);
    }
    return queryObject;
}

document.addEventListener("DOMContentLoaded", () => {
    const params = getQueryParams();

    if (params.name) {
        document.getElementById("name").value = params.name;
    }
    if (params.email) {
        document.getElementById("email").value = params.email;
    }
    if (params.phone) {
        document.getElementById("phone").value = params.phone;
    }

    if (params.subject) {
        const subjectSelect = document.getElementById("subject");
        subjectSelect.value = params.subject;
    }

    if (params.message) {
        document.getElementById("message").value = params.message;
    }

    document.querySelector('form').addEventListener('submit', function(event) {
        var subjectText = {
            'general': 'Información General',
            'auto': 'Seguro de Automóvil',
            'moto': 'Seguro de Motocicletas',
            'gmm': 'Gastos Médicos',
            'hogar': 'Seguro de Hogar',
            'vida': 'Seguro de Vida',
            'accidentes': 'Accidentes Personales',
            'viaje': 'Seguro de Viaje',
            'empresariales': 'Soluciones Empresariales',
            'transporte': 'Seguro de Transporte',
            'rescivil': 'Seguro de Responsabilidad Civil',
            'fianzas': 'Fianzas',
            'otro': 'Otro'
        };
        
        var subjectValue = document.getElementById('subject').value;
        document.querySelector('input[name="_subject"]').value = 'Nuevo mensaje en bienseguro.net: ' + subjectText[subjectValue];
    });
});

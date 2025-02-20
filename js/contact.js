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
});

document.querySelector('form').addEventListener('submit', function (event) {
    // Change button "Enviar" to "Enviando..." adding a loading spinner
    const submitBtn = document.getElementById('submit-btn');

    submitBtn.textContent = 'Enviando...';
    
    const spinner = document.createElement('div');
    spinner.classList.add('spinner-border', 'spinner-border-sm', 'ms-2');
    spinner.setAttribute('role', 'status');

    const span = document.createElement('span');
    span.classList.add('visually-hidden');
    span.textContent = 'Loading...';

    spinner.appendChild(span);
    submitBtn.appendChild(spinner);
    
    // Setting for form email subject
    var subjectText = {
        'general': 'Información General',
        'auto': 'Automóvil',
        'moto': 'Motocicletas',
        'gmm': 'Gastos Médicos',
        'hogar': 'Hogar',
        'vida': 'Vida',
        'accidentes': 'Accidentes Personales',
        'viaje': 'Viaje',
        'empresariales': 'Empresariales',
        'transporte': 'Transporte',
        'rescivil': 'Responsabilidad Civil',
        'fianzas': 'Fianzas',
        'otro': 'Otro'
    };
    
    var subjectValue = document.getElementById('subject').value;
    document.querySelector('input[name="_subject"]').value = 'bienseguro.net: ' + subjectText[subjectValue];
});

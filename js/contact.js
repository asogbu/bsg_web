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
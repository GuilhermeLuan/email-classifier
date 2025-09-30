// Notification Service - Handles user alerts and feedback messages

export function showAlert(message, type = "danger") {
    const alertContainer = document.getElementById("alertContainer");
    alertContainer.innerHTML = "";

    const alert = document.createElement("div");
    alert.className = `alert alert-${type} alert-dismissible fade show shadow-sm w-100`;
    alert.role = "alert";
    alert.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    alertContainer.appendChild(alert);

    setTimeout(() => {
        alert.classList.remove("show");
        setTimeout(() => alert.remove(), 150);
    }, 3000);
}

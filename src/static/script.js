import {classifyEmail} from "./services/emailService.js";

const textArea = document.getElementById('emailText');
const classifyButton = document.getElementById('classifyBtn');

classifyButton.addEventListener('click', async () => {
    const emailContent = textArea.value.trim();

    if (!emailContent) {
        showBootstrapAlert("Digite um texto antes de enviar!");
        return;
    }

    try {

        const payload = {email: emailContent};

        const classifyResponse = await classifyEmail(payload);

        console.log("Received classification:", classifyResponse.data);
    } catch (error) {
        console.error("Error during classification:", error);
    }
});

function showBootstrapAlert(message, type = "danger") {
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


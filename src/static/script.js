import {classifyEmail, generateReply} from "./services/emailService.js";

const textArea = document.getElementById('emailText');
const classifyButton = document.getElementById('classifyBtn');
const spinner = document.getElementById('loadingSpinner');
const classifyBtnText = document.getElementById('classifyBtnText');

classifyButton.addEventListener('click', handleEmailAnalysis);

async function handleEmailAnalysis() {
    const emailContent = textArea.value.trim();

    if (!emailContent) {
        showBootstrapAlert("Digite um texto antes de enviar!");
        return;
    }

    setLoadingState(true);
    try {
        const classifyResponse = await classifyEmail({ email: emailContent });
        const classification = classifyResponse.data.message;
        displayResult(classification);

        console.log("Received classification:", classification);

        const replyResponse = await generateReply({ email: emailContent, classify: classification });
        const suggestedReply = replyResponse.data.message;
        displaySuggestedReply(suggestedReply);

        console.log("Received suggested reply:", suggestedReply);
    } catch (error) {
        console.error("Error during email analysis:", error);
        showBootstrapAlert("Ocorreu um erro ao processar o e-mail. Tente novamente mais tarde.", "danger");
    } finally {
        setLoadingState(false)
    }

}

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

function setLoadingState(isLoading) {
    if(isLoading){
        classifyButton.disabled = true;
        spinner.classList.remove('d-none');
        classifyBtnText.innerText = 'Classificando...';
        classifyBtnText.classList = 'bi';
        return;
    }

    classifyButton.disabled = false;
    spinner.classList.add('d-none');
    classifyBtnText.classList = 'bi bi-lightning-charge-fill';
    classifyBtnText.innerText = 'Analisar E-mail';

}

function displayResult(isProductive) {
    const circleElement = document.getElementById("status-circle");
    const textElement = document.getElementById("status-email");

    if (isProductive === "Productive") {
        textElement.innerHTML = "Produtivo";
        circleElement.classList.remove("bg-danger");
        circleElement.classList.add("bg-success");

        return;
    }

    textElement.innerHTML = "Não produtivo";
    circleElement.classList.remove("bg-success");
    circleElement.classList.add("bg-danger");
}

function displaySuggestedReply(suggestedReply) {
    const replyTextArea = document.getElementById("suggestedReply");
    replyTextArea.value = suggestedReply;
}

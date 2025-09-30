// UI Service - Handles all DOM manipulation and display updates

export function displayEmailClassification(classification) {
    const circleElement = document.getElementById("status-circle");
    const textElement = document.getElementById("status-email");

    if (classification === "Productive") {
        textElement.innerHTML = "Produtivo";
        circleElement.classList.remove("bg-danger");
        circleElement.classList.add("bg-success");
        return;
    }

    textElement.innerHTML = "Não produtivo";
    circleElement.classList.remove("bg-success");
    circleElement.classList.add("bg-danger");
}

export function displaySuggestedReply(suggestedReply) {
    const replyTextArea = document.getElementById("suggestedReply");
    replyTextArea.value = suggestedReply;
}

export function setLoadingState(isLoading) {
    const classifyButton = document.getElementById('classifyBtn');
    const spinner = document.getElementById('loadingSpinner');
    const classifyBtnText = document.getElementById('classifyBtnText');

    if (isLoading) {
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

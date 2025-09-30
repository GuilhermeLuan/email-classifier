import {showAlert} from "../services/notificationService.js";

export async function copyTextWithFeedback(text, button, options = {}) {
    const {
        successText = '<i class="bi bi-check-lg"></i> Copiado!',
        successClass = 'btn-success',
        originalClass = 'btn-secondary',
        duration = 2000
    } = options;

    return navigator.clipboard.writeText(text).then(() => {
        const originalText = button.innerHTML;

        button.innerHTML = successText;
        button.classList.add(successClass);
        button.classList.remove(originalClass);

        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove(successClass);
            button.classList.add(originalClass);
        }, duration);

    }).catch(err => {
        console.error('Falha ao copiar o texto: ', err);
        showAlert("Não foi possível copiar o texto.", "danger");
    });
}
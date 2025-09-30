// Email Processing Service - Handles the main email analysis workflow
import { classifyEmail, generateReply } from './emailService.js';
import { displayEmailClassification, displaySuggestedReply, setLoadingState } from './uiService.js';
import { showAlert } from './notificationService.js';

export async function processEmailAnalysis(emailContent) {
    if (!emailContent.trim()) {
        showAlert("Digite um texto antes de enviar!");
        return;
    }

    setLoadingState(true);

    try {
        // Classify the email
        const classifyResponse = await classifyEmail({ email: emailContent });
        const classification = classifyResponse.data.message;
        displayEmailClassification(classification);

        console.log("Received classification:", classification);

        // Generate suggested reply
        const replyResponse = await generateReply({ email: emailContent, classify: classification });
        const suggestedReply = replyResponse.data.message;
        displaySuggestedReply(suggestedReply);

        console.log("Received suggested reply:", suggestedReply);

    } catch (error) {
        console.error("Error during email analysis:", error);
        showAlert("Ocorreu um erro ao processar o e-mail. Tente novamente mais tarde.", "danger");
    } finally {
        setLoadingState(false);
    }
}

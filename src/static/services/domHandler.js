// DOM Event Handler Service - Manages user interface interactions
import { processEmailAnalysis } from './emailProcessor.js';

export function initializeEmailAnalysisHandler() {
    const textArea = document.getElementById('emailText');
    const classifyButton = document.getElementById('classifyBtn');

    classifyButton.addEventListener('click', async () => {
        const emailContent = textArea.value;
        await processEmailAnalysis(emailContent);
    });
}

export function getEmailContent() {
    const textArea = document.getElementById('emailText');
    return textArea.value.trim();
}

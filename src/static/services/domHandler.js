// DOM Event Handler Service - Manages user interface interactions
import {processEmailAnalysis} from './emailProcessor.js';
import {copyTextWithFeedback} from "../utils/clipboard.js";

export function initializeEmailAnalysisHandler() {
    const textArea = document.getElementById('emailText');
    const classifyButton = document.getElementById('classifyBtn');

    classifyButton.addEventListener('click', async () => {
        const emailContent = textArea.value;
        await processEmailAnalysis(emailContent);
    });
}

export function copyToClipboard() {
    const copyButton = document.getElementById('copyButton');
    const textArea = document.getElementById('suggestedReply');

    copyButton.addEventListener('click', async () => {
        const textToCopy = textArea.value;

        if (!textToCopy) {
            return;
        }

        try {
            await copyTextWithFeedback(textToCopy, copyButton);

        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    });
}

export function getEmailContent() {
    const textArea = document.getElementById('emailText');
    return textArea.value.trim();
}

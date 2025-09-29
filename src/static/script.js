import {classifyEmail} from "./services/emailService.js";

const textArea = document.getElementById('emailText');
const classifyButton = document.getElementById('classifyBtn');

classifyButton.addEventListener('click', async () => {
    const emailContent = textArea.value.trim();

    try {
        const payload = {content: emailContent};

        const classifyResponse = await classifyEmail(payload);

        console.log("Received classification:", classifyResponse.data);
    } catch (error) {
        console.error("Error during classification:", error);
    }
});

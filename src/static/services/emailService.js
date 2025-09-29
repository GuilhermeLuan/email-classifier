import api from "./api.js";

export const classifyEmail = (emailData) => {
    return api.post("/classify", emailData);
}

export const generateReply = (emailData) => {
    return api.post("/generate-reply", emailData);
}
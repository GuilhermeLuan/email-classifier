from pathlib import Path

import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv(".venv")


def classify_email(data: dict) -> dict:
    genai.configure(api_key=os.getenv("GEMINI_API_TOKEN"))
    model = genai.GenerativeModel("gemini-2.5-flash")

    email_to_classify = data.get('email', '')

    prompt = get_prompt().format(email_to_classify=email_to_classify)

    response = model.generate_content(prompt)
    return {'message': response.text}


def get_prompt() -> str:
    prompt_path = Path(__file__).parent.parent / "prompts" / "email_classification.txt"

    with open(prompt_path, "r", encoding="utf-8") as f:
        prompt_template = f.read()

    return prompt_template

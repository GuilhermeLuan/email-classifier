from pathlib import Path

import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv(".venv")


def classify_email(data: dict) -> dict:
    genai.configure(api_key=os.getenv("GEMINI_API_TOKEN"))
    model = genai.GenerativeModel(os.getenv("GEMINI_MODEL", "gemini-2.5-flash-lite"))

    email_to_classify = data.get('email', '')

    prompt = get_classify_prompt().format(email_to_classify=email_to_classify)

    response = model.generate_content(prompt)
    return {'message': response.text}

def response_to_email(data: dict) -> dict:
    genai.configure(api_key=os.getenv("GEMINI_API_TOKEN"))
    model = genai.GenerativeModel(os.getenv("GEMINI_MODEL", "gemini-2.5-flash-lite"))

    classify = data.get('classify', '')
    email_to_response = data.get('email', '')

    prompt = get_response_prompt().format(email_to_response=email_to_response, email_classification=classify)

    response = model.generate_content(prompt)
    return {'message': response.text}

def get_classify_prompt() -> str:
    prompt_path = Path(__file__).parent.parent / "prompts" / "email_classification.txt"

    with open(prompt_path, "r", encoding="utf-8") as f:
        prompt_template = f.read()

    return prompt_template

def get_response_prompt() -> str:
    prompt_path = Path(__file__).parent.parent / "prompts" / "email_response.txt"

    with open(prompt_path, "r", encoding="utf-8") as f:
        prompt_template = f.read()

    return prompt_template

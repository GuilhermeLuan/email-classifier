import google.generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv(".venv")

def classify_email(data: dict) -> dict:

    return {'message': "productive", 'input': data}
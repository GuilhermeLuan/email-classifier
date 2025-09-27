from flask import Blueprint, request, jsonify, render_template
from services.classifier_service import classify_email
from services.classifier_service import response_to_email

bp = Blueprint('classify', __name__)

@bp.route('/', methods=['GET'])
def home():
    return render_template("index.html")

@bp.route('/classify', methods=['POST'])
def classify():
    data = request.get_json()
    if not data or 'email' not in data or not isinstance(data['email'], str):
        return jsonify({"error": "Invalid payload. A JSON with the key 'email' (string) is expected."}), 400

    result = classify_email(data)
    return jsonify(result), 200


@bp.route('/generate-reply', methods=['POST'])
def generate_reply():
    data = request.get_json()

    if (not data or
        'email' not in data or not isinstance(data['email'], str) or
        'classify' not in data or not isinstance(data['classify'], str)):
        return jsonify({"error": "Invalid payload. A JSON with the keys 'email' (string) and 'classify' (string) is expected."}), 400

    result = response_to_email(data)
    return jsonify(result), 200

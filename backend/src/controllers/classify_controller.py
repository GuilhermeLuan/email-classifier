from flask import Blueprint, request, jsonify
from services.classifier_service import classify_email

bp = Blueprint('classify', __name__)

@bp.route('/classify', methods=['POST'])
def classify():
    data = request.get_json(silent=True) or {}
    result = classify_email(data)
    return jsonify(result), 200
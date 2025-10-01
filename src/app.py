import os
import sys
from flask import Flask, request
import mimetypes

from flask.cli import load_dotenv
from flask_cors import CORS

# Add JavaScript module MIME type
mimetypes.add_type('application/javascript', '.js')

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from controllers.classify_controller import bp as classify_bp


def create_app():
    load_dotenv()
    app = Flask(__name__, static_folder='static')
    CORS(app)

    # Configure static file handling for JavaScript modules
    @app.after_request
    def after_request(response):
        if response.mimetype == 'text/html' and request.path.endswith('.js'):
            response.mimetype = 'application/javascript'
        return response

    app.register_blueprint(classify_bp)
    return app


app = create_app()

if __name__ == '__main__':
    app.run(debug=True)

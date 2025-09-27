import os
import sys
from flask import Flask

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from controllers.classify_controller import bp as classify_bp

def create_app():
    app = Flask(__name__)
    app.register_blueprint(classify_bp)
    return app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)

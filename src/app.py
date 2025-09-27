from flask import Flask
from controllers.classify_controller import bp as classify_bp

def create_app():
    app = Flask(__name__)
    app.register_blueprint(classify_bp)
    return app

if __name__ == '__main__':
    create_app().run(debug=True)
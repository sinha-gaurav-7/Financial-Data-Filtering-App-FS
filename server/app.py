from flask import Flask
from flask_cors import CORS 
from routes.data_routes import data_blueprint

app = Flask(__name__)

# Enable CORS
CORS(app)  

# Register Blueprints
app.register_blueprint(data_blueprint, url_prefix='/api')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

from flask import Flask, render_template, jsonify
import requests
import os
from prometheus_flask_exporter import PrometheusMetrics


app = Flask(__name__)
metrics = PrometheusMetrics(app)

API_URL = os.getenv('API_URL', 'http://localhost:3001/users')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/users')
def get_users():
    try:
        print("called")
        response = requests.get(API_URL)
        print(response)
        response.raise_for_status()
        return jsonify(response.json())
    except requests.RequestException as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    print("Using API url:", API_URL)
    app.run(host='0.0.0.0', port=80)

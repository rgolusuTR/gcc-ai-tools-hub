"""
GCC AI Tools Hub - Centralized Dashboard for Team AI Applications
A Flask-based web application that provides a unified interface to access all team AI tools.
"""

from flask import Flask, render_template, jsonify
import json
import os

app = Flask(__name__)

# Load tools configuration
def load_tools_config():
    """Load tools configuration from JSON file"""
    config_path = os.path.join(os.path.dirname(__file__), 'config', 'tools.json')
    try:
        with open(config_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        return {"categories": [], "tools": []}

@app.route('/')
def index():
    """Main dashboard page"""
    config = load_tools_config()
    return render_template('index.html', 
                         categories=config.get('categories', []),
                         tools=config.get('tools', []))

@app.route('/api/tools')
def get_tools():
    """API endpoint to get all tools"""
    config = load_tools_config()
    return jsonify(config)

@app.route('/api/tools/<category>')
def get_tools_by_category(category):
    """API endpoint to get tools by category"""
    config = load_tools_config()
    filtered_tools = [tool for tool in config.get('tools', []) 
                     if tool.get('category') == category]
    return jsonify({"tools": filtered_tools})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
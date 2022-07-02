from flask import Flask
from flask import render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')
#
# @app.
# def enviar


if __name__ == "__main__":
    app.run(host='192.168.0.103', port=5000)
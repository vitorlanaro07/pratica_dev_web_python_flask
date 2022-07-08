from flask import Flask, jsonify ,render_template, url_for


app = Flask(__name__)


@app.route("/")
@app.route("/index")
def index():
    valor = "Hello World!"
    s = {1,2, "1"}

    return render_template('index.html', filename = None, logica = valor)


@app.route("/pagina2")
def pagina2():
    valor = "Hello World!"
    return render_template("pagina2.html", apresentar=valor)


if __name__ == "__main__":
    app.run(host='192.168.0.103', port=5000)
from crypt import methods
from os import remove
from flask import Flask, app, render_template, request, redirect


class Cor:
    def __init__(self,id, cor, rate):
        self.id = id
        self.cor = cor
        self.rate = rate
    


cor = Cor(0,"Amarelo", "5")
cor1 = Cor(1,"Verde", "3")
cor2 = Cor(2,"Azul", "2")

lista = [cor, cor1, cor2]


app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html", musicas=lista)


@app.route("/adicionar", methods=["GET", "POST"])
def adicionar():
    return render_template("adicionar.html")


@app.route("/novo", methods=["GET", "POST"])
def novo():
    print("ok")
    id = len(lista)
    cor = request.form['cor']
    rate = request.form['rate']
    lista.append(Cor(id, cor, rate))
    return redirect("/")


@app.route("/remover/<int:id>")
def remover(id):
    try:
        index=0
        for x in lista:
            if x.id == id:
                lista.pop(index)
            else:
                index += 1
        return redirect("/")
    except:
        return "ops"

if __name__ == "__main__":
    app.run(debug=True, host="192.168.0.103", port=5000)
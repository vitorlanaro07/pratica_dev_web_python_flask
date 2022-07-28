from mimetypes import init
from subprocess import list2cmdline
from flask import Flask, render_template, request, redirect

list_task = []

class Task():
    def __init__(self, id, tarefa, descricao, dia, hora):
        self.id = id
        self.tarefa = tarefa
        self.descricao = descricao
        self.dia = dia
        self.hora = hora
    

def criar_objeto_task():
    tarefa = request.form['tarefa']
    descricao = request.form['descricao']
    dia = request.form['dia']
    hora = request.form['hora']

    list_task.append(Task(1, tarefa, descricao, dia, hora))



app = Flask(__name__)

@app.route("/")
def index():
    return render_template("base.html")


@app.route("/task" , methods=["GET", "POST"])
def task():
    if request.method == 'POST':
        criar_objeto_task()
        return render_template("task.html", listTask=list_task)
    else:
        if len(list_task) > 0:
            return render_template("task.html", listTask=list_task)
        else:
            return render_template("task.html", listTask=None)
    




if __name__ == "__main__":
    app.run(host="192.168.0.103", port=5000, debug=True)
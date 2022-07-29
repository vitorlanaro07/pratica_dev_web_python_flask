from mimetypes import init
from subprocess import list2cmdline
from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
SQLALCHEMY_TRACK_MODIFICATIONS = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///task.db'
db = SQLAlchemy(app)

class Task(db.Model):
    id = db.Column('id', db.Integer, primary_key = True, autoincrement=True)
    tarefa = db.Column(db.String(150))
    descricao = db.Column(db.String(250))
    dia = db.Column(db.String(15))
    hora = db.Column(db.String(15))

    def __init__(self, tarefa, descricao, dia, hora):
        self.tarefa = tarefa
        self.descricao = descricao
        self.dia = dia
        self.hora = hora
    

def criar_objeto_task():
    tarefa = request.form['tarefa']
    descricao = request.form['descricao']
    dia = request.form['dia']
    hora = request.form['hora']
    return Task(tarefa, descricao, dia, hora)





@app.route("/")
def index():
    return render_template("base.html")


@app.route("/task" , methods=["GET", "POST"])
def task():
    if request.method == 'POST':
        task_db = criar_objeto_task()
        db.session.add(task_db)
        db.session.commit()
        return render_template("task.html", listTask=None)
    else:
        task_db = Task.query.all()
        return render_template("task.html",listTask=task_db)
    




if __name__ == "__main__":
    db.create_all()
    app.run(host="192.168.0.103", port=5000, debug=True)
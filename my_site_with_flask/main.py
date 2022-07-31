from mimetypes import init
from subprocess import list2cmdline
from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
import datetime

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
    e = datetime.datetime.now()
    tarefa = request.form['tarefa']
    descricao = request.form['descricao']
    dia = str(e.day) + "/" + str(e.month) + "/" + str(e.year)
    hora = str(e.hour) + ":" + str(e.minute) + ":" + str(e.second)
    return Task(tarefa, descricao, dia, hora)

@app.route("/")
def index():
    return render_template("base.html")

@app.route("/adicionar", methods=["POST"])
def adicionar():
    task_db = criar_objeto_task()
    db.session.add(task_db)
    db.session.commit()
    return redirect("/task")

@app.route("/task", methods=["GET","POST"])
def task():
    if request.method == "POST":
        print("POST")
    task_db = Task.query.all()
    return render_template("task.html",listTask=task_db)
    

@app.route("/delete/<int:id>")
def delete(id):
    task = Task.query.get(id)
    db.session.delete(task)
    db.session.commit()
    return redirect("/task")

@app.route("/task/<int:id>")
def task_view(id):
    task = Task.query.get(id)
    return render_template("task_view.html", task=task)

@app.route("/update/<int:id>", methods=["POST"])
def update(id):
    task = Task.query.get(id)
    if request.method == 'POST':
        task.tarefa = request.form['tarefa']
        task.descricao = request.form['descricao']
        task.dia = request.form['dia']
        task.hora = request.form['hora']
        db.session.commit()
        return redirect("/task/"+str(id))

if __name__ == "__main__":
    db.create_all()
    app.run(host="localhost", port=5000, debug=True)
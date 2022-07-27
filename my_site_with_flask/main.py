from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("base.html")


@app.route("/task")
def task():
    return render_template("task.html")

app.run(host="192.168.0.103", port=5000, debug=True)
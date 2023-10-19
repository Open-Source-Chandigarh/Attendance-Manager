from flask import Flask,jsonify
from testo import func

app = Flask(__name__)

@app.route("/")
def hello_world():
    return("hello")


@app.route("/add")
def add():
    return("add a stbject here")


app.run(debug=True)
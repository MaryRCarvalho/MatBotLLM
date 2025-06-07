from flask import Flask, request
from chatbot import getBotResponse
from flask_cors import CORS

app=Flask(__name__)
CORS(app)
@app.route("/")
def home ():
    return "hello world"

@app.route("/enviaMensagem",methods=["POST"])
def enviaMensagem ():
    if request.method=="POST":
       resposta = getBotResponse(request.get_json(force=True).get("Mensagem"))
       return {"resultado":resposta}

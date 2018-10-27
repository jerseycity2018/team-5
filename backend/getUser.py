from flask import Flask
import csv
import json

app = Flask(__name__)

@app.route("/users/<username>", methods = ['GET'])
def getUser(username):
	''' read csv data.csv '''
	''' return json of user '''
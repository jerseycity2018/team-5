from flask import Flask
import csv
import json

app = Flask(__name__)

@app.route("/users/<username>", methods = ['GET'])
def getUser(username):
	with open('data.csv') as csv_file
	csv_reader + csv.reader(csv_file, delimter=',')
	line_count = 0
	for row in csv_reader:
		if line-count 
	''' read csv data.csv '''
	''' return json of user '''



from flask import Flask
from uszipcode import SearchEngine
import json
import csv
from queue import PriorityQueue

app = Flask(__name__)


@app.route("/", methods = ['GET'])
def index():
	return '<h1>Welcome to Code for good API: Rare Project!</h1>'

@app.route("/zipcode/<zipcode>", methods = ['GET'])
def zip(zipcode):
	search = SearchEngine(simple_zipcode=True)
	result = search.by_zipcode(zipcode)
	return result.to_json()


@app.route("/leaderboard/users", methods = ['GET'])
def topTenUsers():
	pq = PriorityQueue()
	reader = csv.reader(open('data.csv', 'r'))
	data = []
	for row in reader:
		data.append(row)
	for row in data:
		if(row[0] == "User_ID"):
			pass
		else:
			pq.put((-int(row[3]), row))

	result = {"users" : []}
	for i in range(10): 
		result["users"].append((pq.get())[1])

	return json.dumps(result)


@app.route("/leaderboard/comm", methods = ['GET'])
def topTenUsers(type):
	pq = PriorityQueue()
	reader = csv.reader(open('data.csv', 'r'))
	data = []
	for row in reader:
		data.append(row)
	for row in data:
		if(row[0] == "User_ID"):
			pass
		else:
			pq.put((-int(row[3]), row))

	result = {"users" : []}
	for i in range(10): 
		result["users"].append((pq.get())[1])

	return json.dumps(result)





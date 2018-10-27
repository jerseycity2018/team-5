from flask import Flask
from uszipcode import SearchEngine
import json

app = Flask(__name__)


@app.route("/", methods = ['GET'])
def index():
	return '<h1>Welcome to Code for good API: Rare Project!</h1>'

@app.route("/zipcode/<zipcode>", methods = ['GET'])
def zip(zipcode):
	search = SearchEngine(simple_zipcode=True)
	result = search.by_zipcode(zipcode)
	return result.to_json()


@app.route("/leaderboard/<type>", methods = ['GET'])
def topTenUsers(type):
	if type == "users":
		topTenUsers = {"users": [{'name': 'bob', 'bottle': 100, 'community': '11444'}] }
		return json.dumps(topTenUsers)

	elif type == "community":
		pass
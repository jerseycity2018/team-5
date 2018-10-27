from flask import Flask
from uszipcode import SearchEngine
import json
import csv
from queue import PriorityQueue
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)


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
	count = 0
	reader = csv.reader(open('../utilities/data.csv', 'r'))
	data = []

	for row in reader:
		data.append(row)
		if(row[0] == "User_ID"):
			pass
		else:
			pq.put((-int(row[3]), row))
			count += 1

	result = {"users" : []}

	if count > 10: count = 10
	for i in range(count): 
		result["users"].append((pq.get())[1])

	for i in range(count):
		zipcode = result["users"][i][4]
		search = SearchEngine(simple_zipcode=True)
		zipSearch = search.by_zipcode(zipcode)
		result["users"][i][4] = zipSearch["major_city"]

	return json.dumps(result)


@app.route("/leaderboard/community/<zipcode>", methods = ['GET'])
def topTenInCommunity(zipcode):
	pq = PriorityQueue()
	reader = csv.reader(open('../utilities/data.csv', 'r'))
	data = []
	count = 0
	for row in reader:
		data.append(row)
	for row in data:
		if row[0] == "User_ID": pass
		else:
			if row[4] == zipcode:
				count += 1
				pq.put((-int(row[3]), row))

	result = {"users" : []}
	if count > 10: count = 10
	for i in range(count): 
		result["users"].append((pq.get())[1])
	
	return json.dumps(result)

@app.route("/leaderboard/topcommunity", methods = ['GET'])
def topTenCommunities():
	communityMap = {}
	pq = PriorityQueue()
	reader = csv.reader(open('../utilities/data.csv', 'r'))
	data = []
	count = 0
	for row in reader:
		if row[4] not in communityMap:
			if row[3] == "Total_Bottles": pass
			else:
				communityMap[row[4]] = int(row[3])
				count += 1
		else:
			if row[3] == "Total_Bottles": pass
			else: communityMap[row[4]] += int(row[3])

	for community in communityMap:
		pq.put((-communityMap[community], community))

	result = {"communities":[]}
	if count > 10: count = 10
	for i in range(count):
		curr = pq.get()
		currRes = {"community": curr[1], "bottles": -curr[0]}
		result["communities"].append(currRes)

	return json.dumps(result)

@app.route("/users/<username>", methods = ['GET'])
def getUser(username):
	with open('data.csv') as csv_file:
		csv_reader = csv.reader(csv_file, delimter=',')
		for row in csv_reader:
			if username == row[2]:
				return json.dumps({"user":row})
	return {"user": "user does not exist"}


@app.route("/social/", methods = ['GET'])
def getSocialMediaPosts():
	reader = csv.reader(open('../utilities/socialdata.csv', 'r'))
	result = {"posts" : []}
	for row in reader:
		currName = row[0]
		currHandle = row[1]
		currPost = row[2]
		currRes = {"name" : currName, "username": currHandle, "post": currPost }
		result["posts"].append(currRes)
	return json.dumps(result)

@app.route("/locations/", methods = ['GET'])
def getMapLocations():
	result = {"locations" : []}
	reader = csv.reader(open('../utilities/coordinates.csv', 'r'))
	for row in reader:
		currLocation = {"lat" : row[0], "long": row[1]}
		result["locations"].append(currLocation)

	return json.dumps(result)
		








		











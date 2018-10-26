from flask import Flask
from uszipcode import SearchEngine

app = Flask(__name__)


@app.route("/zipcode/<zipcode>", methods = ['GET'])
def hello(zipcode):
	search = SearchEngine(simple_zipcode=True)
	result = search.by_zipcode(zipcode)
	return result.to_json()

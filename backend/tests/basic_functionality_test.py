import requests

def test_function():
	r = requests.get('http://52.204.11.167:5000/')
	assert r.status_code == 200



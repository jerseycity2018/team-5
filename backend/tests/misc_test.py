import requests

def test_social():
		r = requests.get('http://52.204.11.167:5000/social')
		assert r.status_code == 200

def test_location():
		r = requests.get('http://52.204.11.167:5000/locations')
		assert r.status_code == 200
import requests

def test_user_leaderboard():
		r = requests.get('http://52.204.11.167:5000/leaderboard/users')
		assert r.status_code == 200

def test_community_leaderboard():
		r = requests.get('http://52.204.11.167:5000/leaderboard/community/11012')
		assert r.status_code == 200

def test_topcommunity_leaderboard():
		r = requests.get('http://52.204.11.167:5000/leaderboard/topcommunity')
		assert r.status_code == 200




import React, { Component } from 'react';
import '../styles/leaderboard.css';

class Leaderboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: 'false',
            data: []
        };
        this.fetchLeaderboardUsers = this.fetchLeaderboardUsers.bind(this);
    }

    fetchLeaderboardUsers() {
        const url = 'http://52.204.11.167:5000/leaderboard/users';
        return fetch(url).then(response => {
            if (!response.ok) {
                throw new Error();
            }
            return response.json();
        }).then(json => {
            this.setState({
                isLoaded: true,
                data: json.users,
            })
        }).catch(error => {
            console.log(error);
        })
    }

    componentDidMount() {
        this.fetchLeaderboardUsers()
    }

    render() {
        console.log(this.state.data);
        return (
            <div>
                <h1>Leaderboards</h1>
            </div>
        );
    }
}

export default Leaderboard;

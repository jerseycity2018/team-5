import React, { Component } from 'react';
import { Tab, Tabs } from 'react-materialize';
import '../styles/leaderboard.css';

class Leaderboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: 'false',
            currentBoard: 'users',
            data: []
        };
        this.fetchLeaderboardUsers = this.fetchLeaderboardUsers.bind(this);
        this.fetchLeaderboardCommunity = this.fetchLeaderboardCommunity.bind(this);
        this.fetchLeaderboardTopCommunity = this.fetchLeaderboardTopCommunity.bind(this);
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

    fetchLeaderboardCommunity() {
        const url = 'http://52.204.11.167:5000/leaderboard/community/11012';
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

    fetchLeaderboardTopCommunity() {
        const url = 'http://52.204.11.167:5000/leaderboard/topcommunity';
        return fetch(url).then(response => {
            if (!response.ok) {
                throw new Error();
            }
            return response.json();
        }).then(json => {
            this.setState({
                isLoaded: true,
                data: json.communities,
            })
        }).catch(error => {
            console.log(error);
        })
    }

    componentDidMount() {
        this.fetchLeaderboardUsers();
        this.fetchLeaderboardCommunity();
        this.fetchLeaderboardTopCommunity();
    }

    render() {
        console.log(this.state.data);
        return (
            <div>
                <h1>Leaderboards</h1>
                <Tabs className='z-depth-1'>
                    <Tab title="All Users">Users</Tab>
                    <Tab title="My Community">My Community</Tab>
                    <Tab title="NYC Community">NYC Community</Tab>
                </Tabs>
            </div>
        );
    }
}

export default Leaderboard;

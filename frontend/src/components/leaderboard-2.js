import React, { Component } from 'react';
import { Table } from 'react-materialize';

class Leaderboard2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: []
        };
        this.fetchLeaderboardCommunity = this.fetchLeaderboardCommunity.bind(this);
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

    componentDidMount() {
        this.fetchLeaderboardCommunity();
    }

    render() {
        console.log(this.state.data[0]);
        return (
            <div>
                <h3>Forest Hills</h3>
                <Table>
                    <thead>
                        <tr>
                            <th data-field="name">Name</th>
                            <th data-field="username">User Name</th>
                            <th data-field="bottles">Bottles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(data => 
                            <tr>
                                <td>{data[1]}</td>
                                <td>{data[2]}</td>
                                <td>{data[3]}</td>
                            </tr>    
                        )} 
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Leaderboard2;
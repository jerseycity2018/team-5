import React, { Component } from 'react';
import { Table } from 'react-materialize';

class Leaderboard3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded:  false,
            data: []
        };
        this.fetchLeaderboardTopCommunity = this.fetchLeaderboardTopCommunity.bind(this);
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
        this.fetchLeaderboardTopCommunity();
    }

    render() {
        console.log(this.state.data);
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                        <th data-field="name">Community</th>
                        <th data-field="bottles">Bottles</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Flushing</td>
                        <td>321313</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Leaderboard3;
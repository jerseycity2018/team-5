import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import { Container, Row, Col } from 'react-materialize';
import faker from 'faker';
import '../styles/home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.getSocialMedia = this.getSocialMedia.bind(this);
  }

  getSocialMedia() {
    const url = 'http://52.204.11.167:5000/social/'
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json()
    }).then(json => {
      this.setState({
        data: json.posts
      })
    }).catch(error => {
      console.log(error);
    })
  }

  componentDidMount() {
    this.getSocialMedia();
  }

  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.750735, lng: -73.984298 } }
        defaultZoom = { 14 }
      >
      </GoogleMap>
    ));

    return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `85vh`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
        <Container>
            <div className="home">
              <Row>          
                <Col s={8}>
                  <h3>GALE FRANCISCA 🔥 🔥</h3>
                  <h5>Great Neck</h5>
                  <h5>Bottles: 96</h5>
                </Col>
                <Col s={4}>
                  <img 
                    className="prof-pic"
                    src="https://s3-eu-west-2.amazonaws.com/carter-brown/carter-brown/wp-content/uploads/2017/07/11105134/staff-profile-placeholder-female.jpg"
                    alt="Profile pic" />
                </Col>
              </Row>
            </div>
            <div className="social-media">
              <Container>
                <h4>🍃 Friends Feed 🍃</h4>
                {this.state.data.map(data => 
                  <div className="posts">
                    <Row>
                      <Col className="img-desc">
                        <img src={faker.image.avatar()}/>
                      </Col>
                      <Col className="post-desc">
                        <h6 style={{fontWeight:"bold"}}>{data['name']} <span style={{fontWeight:"normal"}}>{data['username']}</span></h6>
                        <p>{data['post']}</p>
                      </Col>
                    </Row>
                  </div>
                )}
              </Container>
            </div>
        </Container>
      </div>
   );
   }
};
export default Home;
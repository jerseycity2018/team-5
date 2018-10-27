import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
class Home extends Component {
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
      </div>
   );
   }
};
export default Home;
import React            from 'react';
import axios            from 'axios';
import GoogleMap        from 'react-google-map';
import GoogleMapLoader  from 'react-google-maps-loader';
import infoWindow       from 'react-google-maps';
import iconMarker       from '../imgs/in-service.png';
import iconMarkerHover  from '../imgs/in-service.png';


const MY_API_KEY = 'AIzaSyDoCQl9Pgpi84MgQIKEncWN6dLjpj0JBdk';


class MyMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stationsData: [],
      gmap:  this.props.googleMaps,
    };
  }
  // axios that gets citibike data from localhost 3001
  componentDidMount() {
    axios('/bikes')
      .then((res) => {
        console.log('data is: ', res.data.data.stationBeanList);

        this.setState((prevState) => ({
          stationsData: res.data.data.stationBeanList,
        }));
        console.log('the state.stationData is :', this.state.stationsData);
      });
  }

  render() {
    return (
    <div id='container'>
      <div className="topbar">
         <p>Find a station</p>
      </div>

      <div className="map">

        <GoogleMap
          googleMaps={this.state.gmap}
        // map board with nothing on it

        // coordinates takes data of a list of citibike stations and it
        // filter through the list and return only station with more than 30
        // available docks. It maps through each station and takes available
        // bike, docks and updated time with latitude and longitude.
        coordinates={
        this.state.stationsData
          .filter(station => station.availableDocks > 30)
          .map(station => ({
              title:    (`${station.stationName}
              - Available Bikes: ${station.availableBikes}
              - Empty Docks:${station.availableDocks}
              - Last Updated on: ${station.lastCommunicationTime}`),
              icon:     iconMarker,
              position: {
                lat: station.latitude,
                lng: station.longitude,
              },

          })

       )}
          center={{ lat: 40.76727216, lng: -73.99392888 }}
          zoom={12}
          onLoaded={(googleMaps, map) => {
        map.setMapTypeId(googleMaps.MapTypeId.SATELLITE);
      }}
        />

      </div>
    <div className='bottombar'></div>
    </div>
    );
  }
}


export default GoogleMapLoader(MyMap, {
  libraries: ['places'],
  key:       MY_API_KEY,
});


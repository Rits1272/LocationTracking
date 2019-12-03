import React from 'react';
import {Text, View} from 'react-native';
import MapView from 'react-native-maps';

export default class Home extends React.Component {

    constructor(props){
        super(props)
        this.state={
            region : {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        }
    }

    getInitialState = () => {
        return {
          region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
        };
      }

      onRegionChange(region) {
        this.setState({ region });
      }
      
      
  render() {
    return (
        <MapView
        region={this.state.region}
        onRegionChange={this.onRegionChange}
      />
    );
  }
}

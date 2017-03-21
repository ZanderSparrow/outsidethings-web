import React, {PropTypes, Component} from 'react';
import GoogleMap from 'google-map-react';

const MarkerComponent = ({text}) => {
  return <div className="map-marker">{text}</div>
};

export default class MapComponent extends Component {
  renderMarkers(places) {
    return places.map(place => {
      return (
        <MarkerComponent key={place.name + place.lat + place.lng} lat={place.lat} lng={place.lng} text={place.name} />
      );
    });
  }

  render() {
    return (
       <GoogleMap
        center={this.props.center}
        zoom={this.props.zoom}>
        {this.props.places && renderMarkers(this.props.places)}
      </GoogleMap>
    );
  }
}

MapComponent.defaultProps = {
  center: [37.7749, -122.4194],
  zoom: 11,
  greatPlaceCoords: {lat: 37.756276, lng: -122.473182}
};

MapComponent.propTypes = {
  center: PropTypes.array,
  zoom: PropTypes.number,
  greatPlaceCoords: PropTypes.any
};

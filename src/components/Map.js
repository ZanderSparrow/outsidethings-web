import React, {PropTypes, Component} from 'react';
import GoogleMap from 'google-map-react';
import _ from 'lodash';
import { connect } from 'react-redux';

const K_SIZE = 10;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_SIZE,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,

  borderRadius: '150%',
  backgroundColor: '#f44336',
  cursor: 'pointer'
};

const greatPlaceStyleHover = {
  ...greatPlaceStyle,
  border: '2px solid #000'
};

const MarkerComponent = ({text, $hover}) => {
  if($hover) {
    console.log(text);
  }
  const style = $hover ? greatPlaceStyleHover : greatPlaceStyle;
  return <div style={style}></div>
};

class MapComponent extends Component {
  componentWillMount() {
    console.log(this.props);
  }
  renderMarkers(places) {
    return places.map(place => {
      return (
        <MarkerComponent key={place.key} lat={place.lat} lng={place.lng} text={place.name} />
      );
    });
  }

  render() {
    return (
       <GoogleMap
        center={this.props.center}
        zoom={this.props.zoom}
        hoverDistance={K_SIZE / 2}>
        {this.props.data.length && this.renderMarkers(this.props.data)}
      </GoogleMap>
    );
  }
}

const mapStateToProps = state => {
  let category = _.find(state.categories, {id: state.selections.category});
  console.log(state[category.name]);
  let data = state[category.name] ? state[category.name].data : [];
  return {
    data
  }
}

MapComponent.defaultProps = {
  center: [37.7749, -122.4194],
  zoom: 13,
};

MapComponent.propTypes = {
  center: PropTypes.array,
  zoom: PropTypes.number
};

export default connect(mapStateToProps)(MapComponent);


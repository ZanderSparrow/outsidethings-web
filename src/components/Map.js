import React, {PropTypes, Component} from 'react';
import GoogleMap from 'google-map-react';
import _ from 'lodash';
import { connect } from 'react-redux';

const MarkerComponent = ({text}) => {
  return <div className="map-marker">{text}</div>
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
        zoom={this.props.zoom}>
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


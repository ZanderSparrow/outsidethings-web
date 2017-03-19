import 'React', { Component } from 'react';

class MapComponent extends Component {

  setMapOnAll(map, markers) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  }

  generateMarkers(locs, map) {
    let markers = [];
    let offset = 1;

    locs.forEach((loc, index) => {
      var latLang = new google.maps.LatLng(loc[0], loc[1]);
      let marker = new google.maps.Marker({
        position: latLang,
        map: map,
        label: (index + offset)+'',
        title: 'Resource ' + (index + offset)
      });
      markers.push(marker);
    });

    this.setState({
      markers: markers
    });
  }

  componentDidMount() {
    // change center to start on either props location or default in sf
    let map = new google.maps.Map(this.refs.map_canvas, {
      center: this.props.initialLocation || {latitude: 37.7749, longitude: 122.4194},
      zoom: 13
    });

    this.setState({
      map: map
    });

    if (this.props.initialLocation) {
      let locationMarker = new google.maps.Marker({
        position: this.props.markers.user,
        map: map,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 5,
          fillColor: 'blue',
          fillOpacity: 0.8,
          strokeColor: 'blue',
          strokeWeight: 12,
          strokeOpacity: 0.2
        },
        title: 'Your position'
      });
      this.setState({
        locationMarker
      });
    }


    if(this.props.markers.results && this.props.markers.results.length) {
      this.generateMarkers(this.props.markers.results, map);
    }
  }

  componentWillReceiveProps(newProps) {
    this.setMapOnAll(null, this.props.markers);
    this.state.locationMarker.setMap(this.state.map);
    this.generateMarkers(newProps.markers, this.state.map);
  }

  render() {
    return (
      <div ref="map_canvas" className="map_canvas"></div>
    )
  }
}

export { MapComponent };

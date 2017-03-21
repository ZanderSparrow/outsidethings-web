import React, { Component } from "react";
import { connect } from 'react-redux';
//import ArtList from './ArtList'; 
import MapComponent from './Map';

class Home extends Component {

  render() {
    return (
      <div className="page-home">
        <div className="jumbotron">
          <h2>Outside Things!</h2>
          <p className="lead">Find art or find trees</p>
        </div>
        <div className="map-container" style={{height: '400px', width: '100%'}}>
          <MapComponent />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    arts: state.art
  };
};

export default connect(mapStateToProps)(Home);

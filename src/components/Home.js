import React, { Component } from "react";
import { connect } from 'react-redux';
import ArtList from './ArtList'; 
import MapComponent from './Map';

class Home extends Component {

  render() {
    return (
      <div className="page-home">
        <div className="jumbotron">
          <h2>Outside Things!</h2>
          <p className="lead">Find art or find trees</p>
        </div>
        {this.props.loading ? <div>Loading...</div> : 
          <div className="map-container" style={{height: '400px', width: '100%'}}>
            <MapComponent places={this.props.arts} />
          </div> 
          
        }
        <ArtList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    arts: state.art.data,
    trees: state.trees.data,
    loading: state.art.fetching
  };
};

export default connect(mapStateToProps)(Home);

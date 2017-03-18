import React, { Component } from "react";
import { connect } from 'react-redux';
import "../stylesheets/main.scss";
import { getArt } from '../actions';

class App extends Component {
  componentWillMount() {
    this.props.getArt();
  }

  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

export default connect(null, { getArt })(App);

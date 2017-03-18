import React, { Component } from "react";
import { connect } from 'react-redux';
import "../stylesheets/main.scss";
import { getArt } from '../actions';

import NavBar from './NavBar';

class App extends Component {
  componentWillMount() {
    this.props.getArt();
  }

  render() {
    return (
      <div className="container">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default connect(null, { getArt })(App);

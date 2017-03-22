import React, { Component } from "react";
import { connect } from 'react-redux';
import "../stylesheets/main.scss";
import { getArt, getTrees } from '../actions';

import NavBar from './NavBar';

class App extends Component {
  componentWillMount() {
    this.props.getArt();
    this.props.getTrees();
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

export default connect(null, { getArt, getTrees })(App);

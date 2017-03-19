import React, { Component } from 'react';

import { Dropdown } from './shared';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selections: [{name: 'Trees'}, {name: 'Art'}],
      selected: {name: 'Art'}
    }
  }

  onSelect(category) {
    console.log(category);
    this.setState({
      selected: category
    });
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Dropdown menuItems={this.state.selections} 
                      onClick={this.onSelect.bind(this)}
                      selected={this.state.selected} />
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;

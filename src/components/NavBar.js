import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Dropdown } from './shared';

class NavBar extends Component {

  onSelect(category) {
    console.log(category);
    
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Dropdown menuItems={this.props.categories} 
                      onClick={this.onSelect.bind(this)}
                      selected={this.props.selected} />
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  let selected = _.find(state.categories, {id: state.selections.category});
  return {
    categories: state.categories,
    selected
  };
};

export default connect(mapStateToProps)(NavBar);

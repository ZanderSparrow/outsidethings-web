import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from './shared';
import { setCategory } from '../actions';

class NavBar extends Component {

  onSelect(categoryId) {
    this.props.setCategory(Number.parseInt(categoryId));
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Dropdown menuItems={this.props.categories} 
                      onClick={this.onSelect.bind(this)}
                      selected={this.props.selected}
                      title={"What to see?"} />
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    selected: state.selections.category
  };
};

export default connect(mapStateToProps, { setCategory })(NavBar);

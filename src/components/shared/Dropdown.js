import React, { Component, PropTypes } from 'react';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

// Props: menuItems and onClick

class Dropdown extends Component {

  handleSelect(eventKey) {
    this.props.onClick(eventKey);
  }

  render() {
    return (
      <Nav bsStyle="tabs" activeKey={this.props.selected} onSelect={this.handleSelect.bind(this)}>
        <NavDropdown eventKey="4" title={this.props.title} id="nav-dropdown">
          {this.props.menuItems.map(item => {
            return <MenuItem key={item.id} eventKey={item.id}>{item.name}</MenuItem>
          })}
          <MenuItem divider />
          <MenuItem eventKey="logout">Logout</MenuItem>
        </NavDropdown>
      </Nav>
    );
  }
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  menuItems: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.number
}

export { Dropdown };

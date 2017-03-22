import React, { Component, PropTypes } from 'react';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

// Props: menuItems and onClick

class Dropdown extends Component {

  handleSelect(eventKey) {
    console.log(`selected ${eventKey}`);
    this.props.onClick(eventKey);
  }

  render() {
    return (
      <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect.bind(this)}>
        <NavItem eventKey="1" href="/home">Art</NavItem>
        <NavItem eventKey="2" title="Item">Trees</NavItem>
        <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
          {this.props.menuItems.map(item => {
            return <MenuItem key={item.id} eventKey={item.name}>{item.name}</MenuItem>
          })}
          <MenuItem divider />
          <MenuItem eventKey="logout">Logout</MenuItem>
        </NavDropdown>
      </Nav>
    );
  }
}

Dropdown.propTypes = {
  menuItems: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.object
}

export { Dropdown };

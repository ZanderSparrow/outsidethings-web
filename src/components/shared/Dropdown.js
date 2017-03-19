import React, { Component } from 'react';

// Props: menuItems and onClick

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    }
  }

  onClick(item) {
    console.log(item);
    this.props.onClick(item);
  }

  onShow() {
    this.setState({
      isVisible: true
    });
    document.addEventListener("click", this.hide);
  }

  onHide() {
    this.setState({
      isVisible: false
    });
    document.removeEventListener("click", this.hide);
  }

  renderItems() {
    this.props.menuItems.map(item => {
      return (<div onClick={this.onClick.bind(item)}>
        <span>{item.name}</span>
        </div>);
    })
  }

  render() {
    return (
      <div className={"dropdown-container" + (this.state.listVisible ? " show" : "")}>
        <div className={"dropdown-display" + (this.state.listVisible ? " clicked": "")} onClick={this.show}>
          <span>{this.props.selected.name}</span>
          <i className="fa fa-angle-down"></i>
        </div>
        <div className="dropdown-list">
          <div>
            {this.renderItems()}
          </div>
        </div>
      </div>
    );
  }
}

export { Dropdown };

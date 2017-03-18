import React from "react";
import ArtList from './ArtList';

export default class Home extends React.Component {
  render() {
    return (
      <div className="page-home">
        <h4>Outside Things!</h4>
        <ArtList />
      </div>
    );
  }
}

import React from "react";
import ArtList from './ArtList';

export default class Home extends React.Component {
  render() {
    return (
      <div className="page-home">
        <div className="jumbotron">
          <h2>Outside Things!</h2>
          <p className="lead">Find art or find trees</p>
        </div>
        <ArtList />
      </div>
    );
  }
}

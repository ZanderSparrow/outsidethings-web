import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArtItem from './ArtItem';

class ArtList extends Component {
  componentWillMount() {
    console.log(this.props);
  }

  renderArts() {

  }

  render() {
    let { data } = this.props.arts;
    return (
      <div>
        <pre>{JSON.stringify(this.props.arts)}</pre>
        {data.map(art => { return <ArtItem key={art.key} artwork={art} /> })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { arts: state.art };
};

export default connect(mapStateToProps)(ArtList);

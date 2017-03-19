import React from 'react';

const ArtItem = ({ artwork }) => {
  return (
    <p className="art-item">
      <div className="title">{artwork.title}</div>
      <div className="artist">{artwork.artist}</div>
    </p>
  );
}

export default ArtItem;

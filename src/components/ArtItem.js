import React from 'react';

const ArtItem = ({ artwork }) => {
  return (
    <p className="art-item">
      <span className="title">{artwork.title}</span>
      <span className="artist">{artwork.artist}</span>
    </p>
  );
}

export default ArtItem;

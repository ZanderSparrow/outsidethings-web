import React from 'react';

const ArtItem = ({ artwork }) => {
  return (
    <div className="art-item">
      <div>{artwork.title}</div>
      <div>{artwork.artist}</div>
    </div>
  );
}

export default ArtItem;

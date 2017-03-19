import React from 'react';

const TreeItem = ({ tree }) => {
  return (
    <div className="tree-item">
      <div>{tree.qSpecies}</div>
    </div>
  );
}

export default TreeItem;

import React from 'react';

const SaveButton = ({ handleClick , value }) => (
  <button
    onClick={handleClick}
  >
    {value}
  </button>
);

export default SaveButton;

import React from 'react';
import { IDCard } from './IDStyle';

const ID = ({ selectedID, el, onClick }) => {
  const handleClick = () => {
    onClick(el);
  };

  return (
    <IDCard
      onClick={handleClick}
      selectedID={selectedID.id === el.id ? true : false}
    >
      <span>{el.name}</span>
    </IDCard>
  );
};

export default ID;

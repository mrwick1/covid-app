import React from 'react';
import { OptionCard } from './OptionsCardStyle';

const OptionsCard = ({ name, id, selected, selectOption }) => {
  return (
    <OptionCard onClick={() => selectOption(id)} selected={selected}>
      {name}
    </OptionCard>
  );
};

export default OptionsCard;

import React from 'react';
import { StatusFlex } from './StatusStyle';

const Status = ({ text, status }) => {
  return (
    <StatusFlex>
      {status ? (
        <img src="/assets/images/completed.png" alt="" />
      ) : (
        <img src="/assets/images/not-completed.png" alt="" />
      )}
      <span>{text}</span>
    </StatusFlex>
  );
};

export default Status;

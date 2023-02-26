import React from 'react';
import { TitleContainer } from './TitleBannerStyle';

const TitleBanner = ({ title }) => {
  return (
    <TitleContainer>
      <span>{title}</span>
    </TitleContainer>
  );
};

export default TitleBanner;

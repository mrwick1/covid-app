import React from 'react';
import Header from '../Header/Header';
import { BannerContainer, BannerSection, MainText } from './BannerStyle';

const Banner = () => {
  return (
    <BannerSection>
      <BannerContainer>
        <MainText>
          Welcome to Covid web <br />
          <span>We're all responsible.....Let's defeat COVID 19</span>
        </MainText>
        <img src=' /assets/images/banner-img.png' alt='' />
      </BannerContainer>
    </BannerSection>
  );
};

export default Banner;

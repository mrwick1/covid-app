import styled from 'styled-components';
import { colors } from '../../consts/theme';

export const BannerSection = styled.div`
  min-height: 544px;
  background-color: ${colors.blue};
`;

export const BannerContainer = styled.div`
  max-width: 1280px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 110px;
  @media (max-width: 1280px) {
    padding-left: 0;
    padding: 0 15px;
  }
`;

export const MainText = styled.h1`
  font-weight: 500;
  font-size: 40px;
  line-height: 37px;
  color: ${colors.white};
  span {
    font-size: 24px;
    line-height: 29px;
    font-weight: 300;
  }
`;

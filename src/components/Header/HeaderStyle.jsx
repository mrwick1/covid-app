import styled from 'styled-components';
import { colors } from '../../consts/theme';

export const HeaderSection = styled.header`
  padding: 50px 0;
  background-color: ${colors.blue};
`;

export const HeaderContainer = styled.div`
  max-width: 730px;
  display: flex;
  margin: auto;
  justify-content: space-between;
  a {
    text-decoration: none;
    font-size: 15px;
    line-height: 18px;
    color: ${colors.white};
    cursor: pointer;
    position: relative;
    text-transform: uppercase;
  }
  a::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 2px;
    width: 0;
    background-color: #ffffff;
    transition: width 0.4s ease-in-out;
  }

  a:hover::after {
    width: 100%;
  }
`;

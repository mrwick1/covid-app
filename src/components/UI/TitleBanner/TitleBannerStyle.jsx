import styled from 'styled-components';
import { colors } from '../../../consts/theme';

export const TitleContainer = styled.div`
  min-height: 220px;
  display: flex;
  justify-content: center;
  padding-top: 57px;
  background-color: ${colors.lightblue};
  span {
    color: ${colors.purple};
    font-weight: 600;
    font-size: 48px;
    line-height: 48px;
    text-transform: capitalize;
  }
`;

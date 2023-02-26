import styled from 'styled-components';
import { colors } from '../../../consts/theme';

export const StatusFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  span {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: ${colors.blue};
  }
`;

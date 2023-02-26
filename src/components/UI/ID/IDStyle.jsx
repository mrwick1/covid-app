import styled from 'styled-components';
import { colors } from '../../../consts/theme';

export const IDCard = styled.div`
  background: ${colors.white};
  border: 1px solid
    ${(props) => (props.selectedID ? colors.blue : colors.white)};
  box-shadow: -6px 8px 17px 1px rgba(106, 105, 105, 0.11);
  border-radius: 24px;
  width: 327px;
  height: 137px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  span {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: ${colors.gray};
    text-transform: capitalize;
  }
`;

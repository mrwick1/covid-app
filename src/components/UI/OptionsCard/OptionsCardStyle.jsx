import styled from 'styled-components';
import { colors } from '../../../consts/theme';

export const OptionCard = styled.div`
  background: #ffffff;
  box-shadow: -6px 8px 17px 1px rgba(106, 105, 105, 0.11);
  border-radius: 24px;
  width: 188px;
  height: 107px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => (props.selected ? colors.blue : colors.white)};
  transition: all 0.3s ease;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
